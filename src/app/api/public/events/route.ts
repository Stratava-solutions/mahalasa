import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const filter: Record<string, unknown> = { isActive: true };
    if (category) filter.category = category;
    const events = await Event.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(events);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
