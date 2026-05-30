import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Slide from "@/models/Slide";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const slide = await Slide.findByIdAndUpdate(id, body, { new: true });
  if (!slide) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(slide);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  await Slide.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
