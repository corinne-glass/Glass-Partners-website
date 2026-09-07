import { prefersReducedMotion } from "@/lib/motion";

export function scrollToHeroForm(formId: string) {
  const el = document.getElementById(formId);
  if (!el) return;

  const reduced = prefersReducedMotion();
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });

  window.setTimeout(
    () => {
      const focusTarget =
        el.querySelector<HTMLElement>("[data-form-focus]") ??
        el.querySelector<HTMLElement>("input:not([type='hidden'])");
      focusTarget?.focus({ preventScroll: true });
    },
    reduced ? 0 : 450,
  );
}
