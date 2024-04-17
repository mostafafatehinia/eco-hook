import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  const isLoggedIn = req.cookies.get("isLoggedIn");
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/", "http://localhost:3000"));
  }
  return NextResponse.next();
}
