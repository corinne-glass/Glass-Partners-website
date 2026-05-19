import { testimonials } from "@/content/site";

export default function SocialProof() {
  const filled = testimonials.filter((t) => t.quote.trim().length > 0);

  return (
    <section className="py-24 px-5 sm:px-6 bg-cloud">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl text-authority mb-6">
          Early stage, real work
        </h2>
        <div className="max-w-2xl space-y-6 text-lg text-metal leading-relaxed mb-16">
          <p>
            I’m currently working with businesses to diagnose and fix performance issues
            across leadership, teams, and execution.
          </p>
          <p className="text-authority font-medium">
            If you’re dealing with similar challenges, we should talk.
          </p>
        </div>

        {filled.length > 0 && (
          <>
            <h3 className="font-display text-xl text-authority mb-8">What clients say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filled.map((t) => (
                <blockquote
                  key={t.attribution}
                  className="rounded-sm border border-authority/10 bg-white p-8 shadow-sm"
                >
                  <p className="font-display text-xl text-authority leading-snug mb-6">
                    “{t.quote}”
                  </p>
                  <footer className="text-sm font-medium text-metal">{t.attribution}</footer>
                </blockquote>
              ))}
            </div>
          </>
        )}

        {filled.length === 0 && (
          <div className="rounded-sm border border-dashed border-authority/20 bg-white/80 p-10 text-center">
            <p className="text-metal text-sm max-w-md mx-auto">
              Add 1–2 testimonials in <code className="text-xs bg-cloud-100 px-1 rounded">content/site.ts</code>{" "}
              — they’ll appear here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
