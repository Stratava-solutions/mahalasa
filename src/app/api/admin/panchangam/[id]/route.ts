import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PanchangamEvent from "@/models/PanchangamEvent";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();
    const event = await PanchangamEvent.findByIdAndUpdate(id, body, { new: true });
    if (!event) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(event);
  } catch (e) { return dbError(e); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { id } = await params;
    await PanchangamEvent.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { return dbError(e); }
}
