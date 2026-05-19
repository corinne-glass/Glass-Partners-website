export default function TrustStrip() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="py-16 md:py-20 px-5 sm:px-6 border-y border-authority/10 bg-[#dbd8cd]"
    >
      <div className="max-w-[1280px] mx-auto lg:px-[8px]">
        <h2
          id="social-proof-heading"
          className="font-display text-2xl md:text-[26px] text-authority mb-10 tracking-[-0.02em]"
        >
          What people say
        </h2>
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          <blockquote className="rounded-sm border border-authority/10 bg-white/90 p-7 shadow-sm">
            <p className="text-[17px] text-authority leading-relaxed">
              “Corinne doesn’t just talk about leadership, she drives execution. Clear
              direction, strong accountability, and things actually get done.”
            </p>
            <footer className="mt-5 text-sm font-medium text-metal">
              — Simon, CTO, Digital Learning Platform
            </footer>
          </blockquote>
          <blockquote className="rounded-sm border border-authority/10 bg-white/90 p-7 shadow-sm">
            <p className="text-[17px] text-authority leading-relaxed">
              “Corinne has a unique ability to rapidly understand people: what they are trying to say and what they need to hear. She brought integrity, objectiveness and quality to the process, giving us clarity and confidence in our decision-making.”
            </p>
            <footer className="mt-5 text-sm font-medium text-metal">
              — Karl Schirmer, Managing Director, Pantex Pty Ltd
            </footer>
          </blockquote>
          <blockquote className="rounded-sm border border-authority/10 bg-white/90 p-7 shadow-sm">
            <p className="text-[17px] text-authority leading-relaxed">
              “Corinne brings clarity where things feel stuck. She aligns teams, lifts
              standards, and gets performance moving again.”
            </p>
            <footer className="mt-5 text-sm font-medium text-metal">
              — Sam, Senior Leader, SaaS
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
