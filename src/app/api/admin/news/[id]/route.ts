import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const item = await News.findByIdAndUpdate(id, body, { new: true });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  await News.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
