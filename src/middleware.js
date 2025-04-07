import { NextResponse } from "next/server";

export const config = {
  matcher: "/products/:id",
};

export async function middleware(request) {
  const email = request.cookies.get("email");

  if (!email) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
