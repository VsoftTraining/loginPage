import { useState } from "react";

const Registration = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Full Name
    if (!fullName.trim()) newErrors.fullName = "Name is required";

    // Email Validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@") || !email.endsWith(".com")) {
      newErrors.email = "Enter a valid email (must contain gamil@ and end with .com)";
    }

    // Password Validation
    const upperCase = /[A-Z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be minimum 6 characters";
    } else if (!upperCase.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!specialChar.test(password)) {
      newErrors.password = "Password must contain at least one special character";
    }

    // Confirm Password
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Role
    if (!role.trim()) newErrors.role = "Select a role";

    setErrors(newErrors);

    // Success
    if (Object.keys(newErrors).length === 0) {
      console.log("Registered Successfully!");
      alert("Registration successful!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-fuchsia-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[450px]">
        <h2 className="text-center text-3xl font-bold mb-6">
          Registration Form
        </h2>

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
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
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

          {/* CONFIRM PASSWORD */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border-b-2 border-gray-300 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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

            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-fuchsia-500 text-white p-3 rounded-lg hover:bg-fuchsia-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
