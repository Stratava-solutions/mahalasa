import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const TOKEN_COOKIE = "admin_token";
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

async function verifyEdgeToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return true;
  } catch {
    return false;
  }
}

async function extractValidToken(req: NextRequest): Promise<string | null> {
  // Try cookie first
  const cookie = req.cookies.get(TOKEN_COOKIE)?.value;
  if (cookie && (await verifyEdgeToken(cookie))) return cookie;

  // Fall back to Authorization: Bearer header
  const auth = req.headers.get("authorization") || "";
  if (auth.startsWith("Bearer ")) {
    const bearer = auth.slice(7);
    if (await verifyEdgeToken(bearer)) return bearer;
  }

  return null;
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") || "";

  // Protect all /api/admin/* routes
  if (pathname.startsWith("/api/admin")) {
    const token = await extractValidToken(req);
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // Subdomain routing for harikhandige
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api")) {
    const url = req.nextUrl.clone();
    if (host.startsWith("harikhandige.")) {
      url.pathname = `/harikhandige${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api/admin/:path*",
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)",
  ],
};
