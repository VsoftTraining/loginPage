import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // Load data from localStorage once
  useEffect(() => {
    setFullName(localStorage.getItem("fullName") || "");
    setEmail(localStorage.getItem("email") || "");
    setRole(localStorage.getItem("role") || "");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-blue-300">
      {/* Sidebar */}
      <div className="w-64 bg-blue-200 shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">MyApp</h2>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-fuchsia-600 font-medium">
            Dashboard
          </li>

          <li
            className="cursor-pointer hover:text-fuchsia-600 font-medium"
            onClick={() =>
              navigate("/UserProfile", {
                state: { fullName, email, role },
              })
            }
          >
            Profile
          </li>

          <li className="cursor-pointer hover:text-fuchsia-600 font-medium">
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="font-medium">{fullName}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Welcome, {fullName}
            </h2>
            <p className="text-gray-600">
              This is your dashboard overview. Manage your activities easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Total Projects</h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Pending Tasks</h3>
              <p className="text-3xl font-bold text-yellow-500">5</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className="text-3xl font-bold text-green-600">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
