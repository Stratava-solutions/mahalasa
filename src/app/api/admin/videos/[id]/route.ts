import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Video from "@/models/Video";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const video = await Video.findByIdAndUpdate(id, body, { new: true });
  if (!video) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(video);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  await Video.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
