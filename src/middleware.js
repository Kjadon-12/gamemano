import { NextResponse } from "next/server";

export const config = {
  matcher: "/products/:id",
};

export async function middleware(request) {
  const email = request.cookies.get("email")?.value;
  
  console.log(email , "cook")
  if (!email) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  else if(email === "0"){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
