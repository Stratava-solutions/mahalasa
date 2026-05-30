import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Video from "@/models/Video";

export async function GET() {
  try {
    await connectDB();
    const videos = await Video.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(videos);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
