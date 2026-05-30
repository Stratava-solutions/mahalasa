import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const users = await AdminUser.find().select("-password").sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email and password are required" }, { status: 400 });
    }

    const existing = await AdminUser.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await AdminUser.create({ name, email, password: hashed, role });
    const { password: _, ...safe } = user.toObject();
    return NextResponse.json(safe, { status: 201 });
  } catch (e) { return dbError(e); }
}
