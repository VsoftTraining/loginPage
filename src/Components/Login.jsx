import React, { useState } from "react";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Field-wise errors
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // -------- LOGIN VALIDATION --------
    if (isLoginMode) {
      if (!email.trim()) newErrors.email = "Email is required";
      if (!password.trim()) newErrors.password = "Password is required";
    }

    // -------- SIGNUP VALIDATION --------
    if (!isLoginMode) {
      if (!name.trim()) newErrors.name = "Name is required";
      if (!email.trim()) newErrors.email = "Email is required";
      if (!password.trim()) newErrors.password = "Password is required";
      if (!confirmPassword.trim())
        newErrors.confirmPassword = "Confirm Password is required";

      if (
        password.trim() &&
        confirmPassword.trim() &&
        password !== confirmPassword
      ) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(isLoginMode ? "Login Successful!" : "Signup Successful!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">

        <div className="flex justify-center mb-4">
          <h2 className="text-3xl font-semibold text-center">
            {isLoginMode ? "Login" : "Sign Up"}
          </h2>
        </div>

        {/* Toggle Buttons */}
        <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r 
            from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 
            ${isLoginMode ? "left-0" : "left-1/2"}`}
          ></div>

          <button
            onClick={() => {
              setIsLoginMode(true);
              setErrors({});
            }}
            className={`w-1/2 text-lg font-medium z-10 ${
              isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => {
              setIsLoginMode(false);
              setErrors({});
            }}
            className={`w-1/2 text-lg font-medium z-10 ${
              !isLoginMode ? "text-white" : "text-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* NAME (Signup Only) */}
          {!isLoginMode && (
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border-b-2 border-gray-300 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          )}

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD (Signup Only) */}
          {!isLoginMode && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border-b-2 border-gray-300 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {/* FORGOT PASSWORD */}
          {isLoginMode && (
            <p className="text-right text-cyan-600 cursor-pointer">
              Forgot Password?
            </p>
          )}

          <button className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-lg font-medium">
            {isLoginMode ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
