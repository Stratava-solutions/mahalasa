import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import HeroImage from "@/models/HeroImage";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const page = req.nextUrl.searchParams.get("page");
    const query: Record<string, unknown> = { isActive: true };
    if (page) query.page = page;
    const images = await HeroImage.find(query).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
