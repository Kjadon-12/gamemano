"use client"

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SignInForm from "./SignInForm";
import SignUpSection from "./SignUpSection";

export default function UserAuth() {
  const pathname = usePathname();
  const router = useRouter()
  

  const showSignIn = pathname === "/login";
  const showSignUp = pathname === "/signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-black w-full p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <SignInForm  pathname={pathname}/>
        <SignUpSection pathname={pathname} router={router} />

        {/* Toggle Button for Small Screens */}
        <div className="md:hidden mt-4 text-center">
          <button
            onClick={() => router.push(pathname==="/login" ? "/signup" : "/login")}
            className="mt-4 text-blue-600 underline"
          >
            {pathname === "/login" ? "Don't have an account? Sign Up" : "Already have an account? Login In"}
          </button>
        </div>
      </div>
    </div>
  );
}
