import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PanchangamEvent from "@/models/PanchangamEvent";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const month = searchParams.get("month");
    const year = searchParams.get("year");
    const filter: Record<string, unknown> = {};
    if (month) filter.month = parseInt(month);
    if (year) filter.year = parseInt(year);
    const events = await PanchangamEvent.find(filter).sort({ day: 1 });
    return NextResponse.json(events);
  } catch (e) { return dbError(e); }
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const body = await req.json();
    const event = await PanchangamEvent.create(body);
    return NextResponse.json(event, { status: 201 });
  } catch (e) { return dbError(e); }
}
