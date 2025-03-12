import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthentication } from "./app/auth/check-authentication";
import { openRoutes } from "./app/constants/routes";

export async function middleware(request: NextRequest) {
  const authenticated = await checkAuthentication();
  const pathname = request.nextUrl.pathname;
  const isOpenRoute = openRoutes.some((route) =>
    pathname.startsWith(route.path)
  );
  if (!authenticated && !isOpenRoute) {
    const loginUrl = new URL(
      openRoutes.find((route) => route.title === "Login")?.path as string,
      request.url
    );
    return NextResponse.redirect(loginUrl);
  }
  if (authenticated && isOpenRoute) {
    return NextResponse.redirect(request.nextUrl.origin);
  }
  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
