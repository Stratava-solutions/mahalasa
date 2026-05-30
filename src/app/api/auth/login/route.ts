import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken, TOKEN_COOKIE } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
  }

  try {
    await connectDB();
    const user = await AdminUser.findOne({ email: email.toLowerCase(), isActive: true });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    await AdminUser.findByIdAndUpdate(user._id, { lastLogin: new Date() });
    const token = signToken({ email: user.email, role: user.role, id: user._id });
    const res = NextResponse.json({ success: true, token });
    res.cookies.set(TOKEN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}
