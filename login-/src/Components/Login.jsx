import React, { useState } from "react";

const Login = () => {
  const [isLogininMode, setIsLoginMode] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">

        {/* Heading */}
        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLogininMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">

          {/* Sliding Background */}
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r 
              from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300
              ${isLogininMode ? "left-0" : "left-1/2"}`}
          ></div>

          <button
            onClick={() => setIsLoginMode(true)}
            className={`w-1/2 text-lg font-medium z-10 transition-all ${
              isLogininMode ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsLoginMode(false)}
            className={`w-1/2 text-lg font-medium z-10 transition-all ${
              !isLogininMode ? "text-white" : "text-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Name Field Only For Signup */}
          {!isLogininMode && (
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none 
                         focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none 
                       focus:border-cyan-500 placeholder-gray-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none 
                       focus:border-cyan-500 placeholder-gray-400"
          />

          {/* Confirm Password Only Signup */}
          {!isLogininMode && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none 
                         focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {/* Forgot Password */}
          {isLogininMode && (
            <div className="text-right">
              <p className="text-cyan-600 hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button className="w-full p-3 bg-gradient-to-r from-blue-700 
                             via-cyan-600 to-cyan-200 text-white rounded-full 
                             text-lg font-medium hover:opacity-90 transition">
            {isLogininMode ? "Login" : "Sign Up"}
          </button>

          {/* Switch Login / Signup */}
          <p className="text-center mt-2">
            {isLogininMode
              ? "Don't have an account?"
              : "Already have an account?"}

            <a
              href="#"
              className="text-blue-600 ml-1"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginMode(!isLogininMode);
              }}
            >
              {isLogininMode ? "Sign up now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
