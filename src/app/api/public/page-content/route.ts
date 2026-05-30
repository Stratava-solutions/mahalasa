import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PageContent from "@/models/PageContent";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    if (!page) return NextResponse.json({ error: "page param required" }, { status: 400 });
    const content = await PageContent.find({ page, isActive: true }).sort({ order: 1 });
    return NextResponse.json(content);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
