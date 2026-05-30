import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PanchangamEvent from "@/models/PanchangamEvent";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const month = parseInt(req.nextUrl.searchParams.get("month") || "0");
    const year = parseInt(req.nextUrl.searchParams.get("year") || "0");
    const query: Record<string, unknown> = { isActive: true };
    if (month) query.month = month;
    if (year) query.year = year;
    const events = await PanchangamEvent.find(query).sort({ day: 1 });
    return NextResponse.json(events);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
