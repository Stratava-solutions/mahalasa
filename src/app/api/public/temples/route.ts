import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Temple from "@/models/Temple";

export async function GET() {
  try {
    await connectDB();
    const temples = await Temple.find({ isActive: true }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(temples);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
