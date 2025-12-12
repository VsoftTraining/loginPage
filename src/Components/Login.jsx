import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (isLoginMode) {
      if (!email.trim()) newErrors.email = "Email is required";
      if (!password.trim()) newErrors.password = "Password is required";
    }

    if (!isLoginMode) {
      if (!fullName.trim()) newErrors.fullName = "Name is required";
      if (!email.trim()) newErrors.email = "Email is required";
      if (!password.trim()) newErrors.password = "Password is required";
      if (!confirmPassword.trim())
        newErrors.confirmPassword = "Confirm Password is required";

      if (password !== confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (isLoginMode) {
        alert("Login Successful!");
      } else {
        alert("Signup Successful!");

        // Send signup data to Registration page
       navigate("/registration", {
  state: {
    fullName,
    email,
    password,
  },
});

      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-semibold text-center mb-4">
          {isLoginMode ? "Login" : "Sign Up"}
        </h2>

        {/* Toggle */}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          {!isLoginMode && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border-b-2 border-gray-300 outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="absolute right-2 top-3 cursor-pointer text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          {!isLoginMode && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 border-b-2 border-gray-300 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <span
                className="absolute right-2 top-3 cursor-pointer text-blue-600"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
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
