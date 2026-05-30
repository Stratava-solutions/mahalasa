import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const news = await News.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(news);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const item = await News.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (e) { return dbError(e); }
}
