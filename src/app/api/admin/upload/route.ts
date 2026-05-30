import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorized } from "@/lib/apiHelpers";

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();

  const formData = await req.formData();
  const file = formData.get("image") as File;
  if (!file) {
    return NextResponse.json({ error: "No image provided" }, { status: 400 });
  }

  const apiKey = process.env.IMGBB_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ImgBB API key not configured" }, { status: 500 });
  }

  const imgbbForm = new FormData();
  imgbbForm.append("image", file);

  const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
    method: "POST",
    body: imgbbForm,
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }

  const data = await response.json();
  return NextResponse.json({
    url: data.data.url,
    displayUrl: data.data.display_url,
    deleteUrl: data.data.delete_url,
  });
}
