import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const openRoutes = ["/auth/login", "/auth/signup"];

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("Authentication")?.value;
  const pathname = request.nextUrl.pathname;
  const isOpenRoute = openRoutes.some((route) => pathname.startsWith(route));
  if (!auth && !isOpenRoute) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  if (auth && isOpenRoute) {
    return NextResponse.redirect(request.nextUrl.origin);
  }
  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
