import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Slide from "@/models/Slide";

export async function GET() {
  try {
    await connectDB();
    const slides = await Slide.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(slides);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
