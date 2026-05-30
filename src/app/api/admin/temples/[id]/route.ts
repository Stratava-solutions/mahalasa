import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Temple from "@/models/Temple";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  const body = await req.json();
  const temple = await Temple.findByIdAndUpdate(id, body, { new: true });
  if (!temple) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(temple);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  await connectDB();
  const { id } = await params;
  await Temple.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
