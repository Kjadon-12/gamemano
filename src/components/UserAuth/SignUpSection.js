"use client";

import React from "react";

export default function SignUpSection({pathname , router}) {
  
  return (
    <div className="w-full md:w-1/2 hidden bg-[#16130cc7] text-white md:flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        {pathname === "/login" ? "Create," : "Login IN"}<br className="hidden md:block" />Account!
      </h2>
      <p className="mb-6 text-sm text-center">
       {pathname === "/login" ? `Sign up if you still don't have an account ...` : "Login in if you've an account..."}
      </p>
      <button onClick={() => router.push(pathname==="/login" ? "/signup" : "/login")} className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black cursor-pointer transition">
        {pathname === "/login" ? "SIGN UP" : "LOG IN"}
      </button>
    </div>
  );
}
