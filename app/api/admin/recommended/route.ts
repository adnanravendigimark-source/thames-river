import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getHomepageContent, saveRecommendedTour, type HomepageContent } from "@/lib/homepage";
import { dbErrorMessage } from "@/lib/db";

// Force this route to always run as a live serverless function rather than
// get statically optimized at build time — see the identical comment in
// app/api/admin/homepage/route.ts for why this matters (PUT silently 405s
// in production otherwise).
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getHomepageContent());
}

// Saves only the fields the Recommended Tour admin panel owns: which tour
// is pinned first in the homepage grid, its gold badge label, urgency text,
// and "why we recommend this" bullets. RecommendedTourForm posts the full
// HomepageContent shape (it reuses the same client state as the Homepage
// form), but only these fields are persisted here — everything else
// (hero copy, sections, header/footer, theme) is owned by
// PUT /api/admin/homepage and must not be touched by this route.
export async function PUT(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as HomepageContent | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    await saveRecommendedTour({
      showFeaturedTour: !!body.showFeaturedTour,
      featuredTourId: body.featuredTourId || "",
      featuredBadgeLabel: body.featuredBadgeLabel || "",
      featuredUrgencyText: body.featuredUrgencyText || "",
      featuredReasons: (body.featuredReasons || []).filter((r) => typeof r === "string" && r.trim().length > 0),
    });

    // Same belt-and-suspenders cache clear as the homepage route — the
    // recommended tour affects both the desktop grid and the mobile
    // sticky bar, rendered on "/".
    revalidatePath("/", "layout");

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: dbErrorMessage(err) }, { status: 500 });
  }
}
