#!/usr/bin/env python3
"""
Reduce periodic grid / moiré on the podcast cover: luminance FFT soft-notches + mild
high-frequency residual trim on Y only (preserves chroma from source).
Overwrites the target PNG.
"""
from __future__ import annotations

import numpy as np
from PIL import Image

PATH = "/Users/corinneglass/Desktop/Website stuff/glass-partners-website/public/the-glass-signal-cover.png"


def rgb_to_ycbcr(x: np.ndarray) -> np.ndarray:
    r, g, b = x[..., 0], x[..., 1], x[..., 2]
    y = 0.299 * r + 0.587 * g + 0.114 * b
    cb = -0.168736 * r - 0.331264 * g + 0.5 * b + 128.0
    cr = 0.5 * r - 0.418688 * g - 0.081312 * b + 128.0
    return np.stack([y, cb, cr], axis=-1)


def ycbcr_to_rgb(yc: np.ndarray) -> np.ndarray:
    y, cb, cr = yc[..., 0], yc[..., 1] - 128.0, yc[..., 2] - 128.0
    r = y + 1.402 * cr
    g = y - 0.344136 * cb - 0.714136 * cr
    b = y + 1.772 * cb
    return np.stack([r, g, b], axis=-1)


def separable_gaussian(img: np.ndarray, sigma: float) -> np.ndarray:
    """Reflect-padded separable Gaussian blur (float32 2D)."""
    radius = max(1, int(np.ceil(3 * sigma)))
    ax = np.arange(-radius, radius + 1, dtype=np.float64)
    k = np.exp(-(ax**2) / (2 * sigma * sigma))
    k /= k.sum()
    pad = radius
    tmp = np.pad(img, ((pad, pad), (0, 0)), mode="reflect")
    acc = np.zeros_like(img, dtype=np.float64)
    for i, ki in enumerate(k):
        acc += ki * tmp[i : i + img.shape[0], :]
    tmp2 = np.pad(acc, ((0, 0), (pad, pad)), mode="reflect")
    out = np.zeros_like(img, dtype=np.float64)
    for i, ki in enumerate(k):
        out += ki * tmp2[:, i : i + img.shape[1]]
    return out.astype(np.float32)


def build_peaks(logm: np.ndarray, ring2: np.ndarray, neigh: int, percentile: float, n_peaks: int) -> list[tuple[int, int]]:
    h, w = logm.shape
    cy, cx = h // 2, w // 2
    half = neigh // 2
    lm = np.ones_like(logm, dtype=bool)
    for dy in range(-half, half + 1):
        for dx in range(-half, half + 1):
            if dy == 0 and dx == 0:
                continue
            rolled = np.roll(np.roll(logm, -dy, axis=0), -dx, axis=1)
            lm &= logm >= rolled
    lm &= ring2
    thr = float(np.percentile(logm[ring2], percentile))
    cand = lm & (logm >= thr)
    scores = np.where(cand, logm, -np.inf).ravel()
    idx = np.argsort(scores)[-n_peaks:]
    py, px = np.unravel_index(idx, logm.shape)
    peaks = [(int(y), int(x)) for y, x in zip(py, px) if cand[y, x]]
    seen: set[tuple[tuple[int, int], tuple[int, int]]] = set()
    uniq: list[tuple[int, int]] = []
    for y, x in peaks:
        a = (y, x)
        b = (2 * cy - y, 2 * cx - x)
        key = tuple(sorted((a, b)))
        if key in seen:
            continue
        seen.add(key)
        uniq.append(a)
    return uniq


def apply_notches(Y: np.ndarray, uniq: list[tuple[int, int]], floor: float, r_inner: float, r_outer: float) -> np.ndarray:
    h, w = Y.shape
    cy, cx = h // 2, w // 2
    yy, xx = np.ogrid[:h, :w]
    Yf = np.fft.fftshift(np.fft.fft2(Y))
    mask = np.ones(Yf.shape, dtype=np.float64)

    def soft_notch(py_i: int, px_i: int) -> None:
        nonlocal mask
        d = np.sqrt((yy - py_i) ** 2 + (xx - px_i) ** 2)
        t = np.clip((d - r_inner) / max(r_outer - r_inner, 1e-6), 0.0, 1.0)
        wgt = floor + (1.0 - floor) * 0.5 * (1.0 + np.cos(np.pi * t))
        mask = np.minimum(mask, wgt)

    for y, x in uniq:
        soft_notch(y, x)
        soft_notch(2 * cy - y, 2 * cx - x)

    Yf2 = Yf * mask
    return np.real(np.fft.ifft2(np.fft.ifftshift(Yf2))).astype(np.float32)


def main() -> None:
    img = Image.open(PATH).convert("RGB")
    rgb = np.asarray(img).astype(np.float32)
    h, w = rgb.shape[:2]
    cy, cx = h // 2, w // 2

    yc = rgb_to_ycbcr(rgb)
    Y0 = yc[..., 0].astype(np.float32)

    yy, xx = np.ogrid[:h, :w]
    dist = np.sqrt((yy - cy) ** 2 + (xx - cx) ** 2)
    ring = (dist > 12) & (dist < min(h, w) * 0.48)
    axis_strip = (np.abs(xx - cx) <= 3) | (np.abs(yy - cy) <= 3)
    ring2 = ring & ~axis_strip

    logm = np.log(np.abs(np.fft.fftshift(np.fft.fft2(Y0))) + 1e-9)

    # Pass 1: aggressive peaks
    uniq1 = build_peaks(logm, ring2, neigh=7, percentile=99.82, n_peaks=72)
    Y1 = apply_notches(Y0, uniq1, floor=0.28, r_inner=1.5, r_outer=10.0)

    logm2 = np.log(np.abs(np.fft.fftshift(np.fft.fft2(Y1))) + 1e-9)
    uniq2 = build_peaks(logm2, ring2, neigh=5, percentile=99.65, n_peaks=56)
    Y2 = apply_notches(Y1, uniq2, floor=0.34, r_inner=2.0, r_outer=8.5)

    # Mild high-frequency mesh trim on luminance only (not a global beautify blur)
    blur = separable_gaussian(Y2, sigma=0.52)
    hf = Y2 - blur
    Y3 = Y2 - 0.22 * hf

    Y3 += float(np.mean(Y0) - np.mean(Y3))

    yc2 = yc.copy()
    yc2[..., 0] = Y3
    rgb2 = ycbcr_to_rgb(yc2)
    out = np.clip(rgb2, 0.0, 255.0).astype(np.uint8)

    Image.fromarray(out).save(PATH, format="PNG", optimize=True)
    print(
        f"Wrote {PATH} | pass1_peaks={len(uniq1)} pass2_peaks={len(uniq2)} | shape={out.shape}"
    )


if __name__ == "__main__":
    main()
