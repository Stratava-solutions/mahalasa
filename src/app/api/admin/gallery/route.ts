import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GalleryImage from "@/models/GalleryImage";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const images = await GalleryImage.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(images);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const image = await GalleryImage.create(body);
    return NextResponse.json(image, { status: 201 });
  } catch (e) { return dbError(e); }
}
