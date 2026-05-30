import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { id } = await params;
    const user = await AdminUser.findById(id).select("-password");
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
  } catch (e) { return dbError(e); }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { id } = await params;
    const { password, ...rest } = await req.json();

    const update: Record<string, unknown> = { ...rest };
    if (password) {
      update.password = await bcrypt.hash(password, 10);
    }

    const user = await AdminUser.findByIdAndUpdate(id, update, { new: true }).select("-password");
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(user);
  } catch (e) { return dbError(e); }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { id } = await params;
    await AdminUser.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (e) { return dbError(e); }
}
