import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { requireAdmin, unauthorized, dbError } from "@/lib/apiHelpers";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(contacts);
  } catch (e) { return dbError(e); }
}
