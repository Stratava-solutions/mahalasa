import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import HeroImage from "@/models/HeroImage";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const image = await HeroImage.findByIdAndUpdate(id, body, { new: true });
  if (!image) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(image);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  await HeroImage.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
