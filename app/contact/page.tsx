import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <Header />
      <main className="bg-[#FAFAF9] min-h-screen pt-28 sm:pt-32 pb-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-block rounded-md bg-white border border-gray-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D6A33A] shadow-sm">
              {contact.heroEyebrow}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[#123B27] sm:text-4xl">
              {contact.heroHeading}
            </h1>
            <div
              className="rich-content mx-auto mt-3 max-w-md text-[#26332B]/80 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
            />
          </div>

          {/* Primary email card */}
          <div className="mt-10 flex flex-col items-center gap-3.5 rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 text-center shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123B27] text-white shadow-md">
              <MailIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#26332B]/60">{contact.emailLabel}</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 block break-all font-serif text-2xl font-bold text-[#123B27] hover:text-[#D6A33A] transition-colors"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-xs text-[#26332B]/80 max-w-sm">{contact.emailNote}</p>
          </div>

          {/* What we can help with */}
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {contact.reasons.map(({ icon, title, body }) => {
              const Icon = getIconComponent(icon);
              return (
                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5.5 shadow-sm text-center sm:text-left transition hover:shadow-md hover:border-[#D6A33A]/40">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-[#123B27] sm:mx-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-sm font-bold text-[#123B27]">{title}</p>
                  <div
                    className="rich-content mt-1.5 text-xs text-[#26332B]/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              );
            })}
          </div>

          <div
            className="rich-content mt-10 border-t border-[#E9E1D3] pt-8 text-center text-xs sm:text-sm text-[#26332B]/60"
            dangerouslySetInnerHTML={{ __html: contact.footerNote }}
          />

          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#123B27] p-7 text-center text-white shadow-xl border border-[#0D2E1E]">
            <p className="text-base font-bold text-white">{contact.ctaHeading}</p>
            <a
              href="/#tours"
              className="rounded-lg bg-[#D6A33A] px-6 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#B3841F] hover:scale-[1.02]"
            >
              {contact.ctaButtonLabel} →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
