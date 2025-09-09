// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;

  const protectedRoutes = ["/linked",];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url)); 
  }

  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    } catch (error) {
      console.error("JWT verification failed:", error);
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.delete("auth-token");
      return response;
    }
  }

  return NextResponse.next();
}
