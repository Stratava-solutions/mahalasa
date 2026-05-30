import { NextRequest, NextResponse } from "next/server";
import { verifyToken, TOKEN_COOKIE } from "./auth";

export function requireAdmin(req: NextRequest) {
  // Try cookie first, but only accept if valid
  const cookie = req.cookies.get(TOKEN_COOKIE)?.value;
  if (cookie) {
    const result = verifyToken(cookie);
    if (result) return result;
  }

  // Fall back to Authorization: Bearer header (localStorage token)
  const auth = req.headers.get("authorization") || "";
  if (auth.startsWith("Bearer ")) {
    const result = verifyToken(auth.slice(7));
    if (result) return result;
  }

  return null;
}

export function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function dbError(e: unknown) {
  const msg = e instanceof Error ? e.message : "Database error";
  return NextResponse.json({ error: msg }, { status: 500 });
}
