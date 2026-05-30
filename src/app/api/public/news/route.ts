import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";

export async function GET() {
  try {
    await connectDB();
    const news = await News.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(news);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
