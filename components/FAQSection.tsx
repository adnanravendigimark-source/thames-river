import { getFaqs } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";
import FaqAccordion from "./FaqAccordion";

export default async function FAQSection() {
  const [faqs, { sections }] = await Promise.all([getFaqs(), getHomepageContent()]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAFAF9] border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#D6A33A]">
            {sections.faq.eyebrow || "FREQUENTLY ASKED QUESTIONS"}
          </p>
          <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#123B27] tracking-tight">
            {sections.faq.heading || "Pena Palace Tickets & Sintra FAQs"}
          </h2>
        </div>

        <FaqAccordion faqs={faqs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
