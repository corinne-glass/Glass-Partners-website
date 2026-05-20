#!/usr/bin/env python3
"""Regenerate hero portrait WebP assets from public/corinne-glass.png."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "public" / "corinne-glass.png"
out_dir = ROOT / "public"

img = Image.open(src).convert("RGB")
for name, size in [("hero-portrait", 800), ("hero-portrait-sm", 560)]:
    copy = img.copy()
    if size < img.width:
        ratio = size / img.width
        copy = copy.resize((size, int(img.height * ratio)), Image.Resampling.LANCZOS)
    path = out_dir / f"{name}.webp"
    copy.save(path, "WEBP", quality=90, method=6)
    print(f"Wrote {path} ({copy.size[0]}x{copy.size[1]})")
