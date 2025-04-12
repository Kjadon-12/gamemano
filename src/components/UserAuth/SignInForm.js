"use client";

import { getFromLocalStorage, setLocalStorageToCookie, setToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignInForm({ pathname }) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
   
    if (pathname === "/login") {
      const { email, password } = getFromLocalStorage();
      if (email === formState?.email && password === formState?.password) {
        alert("Login Successfully! , Now You can access products detail page");
        setFormState({email: "" , password:""});
        setLocalStorageToCookie();
        router.push("/products");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        alert("Please Enter Correct Credentials !");
        return;
      }
    }
    else if(pathname==="/signup"){
      setToLocalStorage(formState?.email , formState?.password);
      alert("User Added Successfully !");
      router.push("/login")
      setFormState({email: "" , password:""})
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full md:w-1/2 p-6 md:p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        {pathname === "/login" ? "Log In" : "Sign Up"}
      </h2>

      <p className="text-center text-gray-500 mb-4">
        Or {pathname === "/login" ? "Log In" : "Sign Up"} using E-Mail Address
      </p>

      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={inputChangeHandler}
          className="w-full mb-4 px-4 py-2 border border-amber-600 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={inputChangeHandler}
            className="w-full px-4 py-2 border border-amber-600 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-black pr-10"
            required
          />
          <div
            className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </div>
        </div>

        {pathname === "/login" && (
          <div className="text-right text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
            Forgot your password?
          </div>
        )}

        <button
          type="submit"
          className="w-full cursor-pointer bg-black text-white py-2 rounded-full hover:bg-[#16130cc7] transition"
        >
          {pathname === "/login" ? "Log In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
