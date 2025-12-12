import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  // Load user name once when component mounts
  useEffect(() => {
    const name = localStorage.getItem("fullName");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">MyApp</h2>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-600 font-medium">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-600 font-medium">Profile</li>
          <li className="cursor-pointer hover:text-blue-600 font-medium">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="font-medium">{userName}</span>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>

        <div className="p-6">

          {/* Welcome Card */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome, {userName}</h2>
            <p className="text-gray-600">
              This is your dashboard overview. Manage your activities easily.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
              <p className="text-3xl font-bold text-yellow-500">5</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>
              <p className="text-3xl font-bold text-green-600">3</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
