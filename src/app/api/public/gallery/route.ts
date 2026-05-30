import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GalleryImage from "@/models/GalleryImage";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    const images = await GalleryImage.find(filter).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
