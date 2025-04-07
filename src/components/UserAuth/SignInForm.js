"use client";

import React from "react";

export default function SignInForm({pathname}) {
  return (
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">{pathname === "/login" ? "Log In" : "Sign Up"}</h2>

    

      <p className="text-center text-gray-500 mb-4">Or {pathname === "/login" ? "Log In" : "Sign Up"} using E-Mail Address</p>

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-2 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
      />
     {pathname === "/login" && <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
        Forgot your password?
      </div>}

      <button className="w-full cursor-pointer bg-black text-white py-2 rounded-full hover:bg-[#16130cc7] transition">
       {pathname === "/login" ? "Login In" : "Sign Up"}
      </button>
    </div>
  );
}
