import Link from "next/link";

type VariantToggleProps = {
  current: "a" | "b";
};

/** Small preview-only switcher for homepage variant reviews. */
export default function VariantToggle({ current }: VariantToggleProps) {
  return (
    <div className="fixed bottom-4 right-4 z-[60] rounded-[6px] border border-[#0E1A2B]/20 bg-[#F7F5F2]/95 p-1 shadow-[0_8px_24px_rgba(14,26,43,0.16)] backdrop-blur">
      <div className="flex items-center gap-1">
        <Link
          href="/"
          className={`inline-flex min-w-[74px] items-center justify-center rounded-[4px] px-3 py-2 text-[12px] font-semibold tracking-[0.02em] transition-colors ${
            current === "a"
              ? "bg-[#0E1A2B] text-[#F7F5F2]"
              : "text-[#0E1A2B] hover:bg-[#0E1A2B]/10"
          }`}
        >
          Variant A
        </Link>
        <Link
          href="/minimal"
          className={`inline-flex min-w-[74px] items-center justify-center rounded-[4px] px-3 py-2 text-[12px] font-semibold tracking-[0.02em] transition-colors ${
            current === "b"
              ? "bg-[#0E1A2B] text-[#F7F5F2]"
              : "text-[#0E1A2B] hover:bg-[#0E1A2B]/10"
          }`}
        >
          Variant B
        </Link>
      </div>
    </div>
  );
}
