import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Slide from "@/models/Slide";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const slides = await Slide.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(slides);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const slide = await Slide.create(body);
    return NextResponse.json(slide, { status: 201 });
  } catch (e) { return dbError(e); }
}
