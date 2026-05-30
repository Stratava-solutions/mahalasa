import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PageContent from "@/models/PageContent";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const filter = page ? { page } : {};
    const content = await PageContent.find(filter).sort({ page: 1, order: 1 });
    return NextResponse.json(content);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const item = await PageContent.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (e) { return dbError(e); }
}
