import { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { fullName: initialName, email: initialEmail, password: initialPassword } =
    location.state || {};

  const [fullName, setName] = useState(initialName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [password, setPassword] = useState(initialPassword || "");
  const [confirmPassword, setConfirmPassword] = useState(initialPassword || "");
  const [role, setRole] = useState("");

  // FIXED — Add these states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  
// useEffect(() => {
//   setName("");
//   setEmail("");
//   setPassword("");
//   setConfirmPassword("");
//   setRole("");
//   setErrors({});
// }, []);

useEffect(() => {
  localStorage.removeItem("fullName");
  localStorage.removeItem("email");
  localStorage.removeItem("role");
}, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!fullName.trim()) newErrors.fullName = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@") || !email.endsWith(".com")) {
      newErrors.email = "Enter a valid email with @ and .com";
    }

    const upperCase = /[A-Z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    } else if (!upperCase.test(password)) {
      newErrors.password = "Must contain uppercase";
    } else if (!specialChar.test(password)) {
      newErrors.password = "Must contain special character";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!role.trim()) newErrors.role = "Select a role";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // alert("Registration successful!");

      localStorage.setItem("fullName", fullName);
localStorage.setItem("email", email);
localStorage.setItem("role", role);

navigate("/dashboard");

   
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-300">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-[450px] mx-4">

        <h2 className="text-center text-3xl font-bold mb-6">Registration Form</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* FULL NAME */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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

            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* CONFIRM PASSWORD */}
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* ROLE */}
          <div>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-3 rounded w-full bg-white outline-none"
            >
              <option value="">Select a role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>

            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-300 text-white p-3 rounded-lg hover:bg-blue-600 "
            
          >
           

            Register
          </button>
        </form>
      </div>

    </div>
  );
};

export default Registration;
