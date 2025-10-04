// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  if (!host) return NextResponse.next();

  const hostname = host.split(':')[0]; 

  if (hostname.startsWith('harikhandige.')) {
    url.pathname = `/subdomain${url.pathname}`; 
    return NextResponse.rewrite(url);
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
