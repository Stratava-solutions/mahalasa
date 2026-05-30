import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Video from "@/models/Video";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const videos = await Video.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(videos);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const video = await Video.create(body);
    return NextResponse.json(video, { status: 201 });
  } catch (e) { return dbError(e); }
}
