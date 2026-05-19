import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StartConversationForm from "@/components/StartConversationForm";
import { calendlyLinkProps, site } from "@/content/site";

export default function StartConversationPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f1e8] text-[#0f172a]">
        <section className="border-b border-[#0f172a]/10 px-5 pb-20 pt-[116px] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6c48]">Contact</p>
            <h1 className="mt-5 max-w-4xl font-display text-[42px] leading-[1.03] tracking-[-0.03em] sm:text-[56px] lg:text-[66px]">
              Start the conversation
            </h1>
            <p className="mt-7 max-w-3xl text-[18px] leading-[1.75] text-[#334155]">
              If you are ready to talk, book a time. If you would rather send context first, share a few details and
              we will come back to you.
            </p>

            <div className="mt-12 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <article className="rounded-[8px] border border-[#0f172a]/12 bg-white p-7">
                <h2 className="font-display text-[34px] leading-[1.04] tracking-[-0.02em] text-[#0f172a]">
                  Book a conversation
                </h2>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#334155]">For people who are ready.</p>
                <a
                  href={site.calendlyUrl}
                  {...calendlyLinkProps()}
                  className="mt-7 inline-flex items-center justify-center rounded-[4px] bg-[#B5332E] px-6 py-3 text-[15px] font-semibold text-[#F7F5F2] transition-colors hover:bg-[#A6342E]"
                >
                  Book a Conversation
                </a>
                <p className="mt-7 border-t border-[#0f172a]/10 pt-6 text-[14px] leading-relaxed text-[#475569]">
                  Or send a quick enquiry below.
                </p>
              </article>

              <StartConversationForm />
            </div>

            <div className="mt-10">
              <Link href="/" className="text-sm font-semibold text-[#6b5c3d] hover:text-[#4f422d]">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
