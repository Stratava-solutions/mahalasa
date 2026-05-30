import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Temple from "@/models/Temple";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const temples = await Temple.find().sort({ order: 1, createdAt: -1 });
    return NextResponse.json(temples);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const temple = await Temple.create(body);
    return NextResponse.json(temple, { status: 201 });
  } catch (e) { return dbError(e); }
}
