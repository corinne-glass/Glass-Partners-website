import HowWeHelpOfferCard, { type HowWeHelpOfferCardProps } from "@/components/HowWeHelpOfferCard";

type Props = {
  id: string;
  heading: string;
  subheading: string;
  cards: HowWeHelpOfferCardProps[];
  /** e.g. last row 3 cards */
  gridClassName?: string;
  /** Surface behind the section (default warm neutral) */
  surfaceClassName?: string;
};

export default function HowWeHelpOfferGroup({
  id,
  heading,
  subheading,
  cards,
  gridClassName = "mt-12 grid gap-5 md:grid-cols-2 md:gap-6",
  surfaceClassName = "bg-[#f4f3f0]",
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-authority/10 px-5 py-16 sm:px-6 sm:py-20 lg:py-24 ${surfaceClassName}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl tracking-[-0.02em] text-authority md:text-4xl lg:text-[2.35rem]">
          {heading}
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-metal sm:text-lg">{subheading}</p>
        <div className={gridClassName}>
          {cards.map((card, i) => (
            <HowWeHelpOfferCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
