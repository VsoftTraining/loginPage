import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  // LOAD DATA AFTER COMPONENT MOUNTS


    useEffect(() => {
  setFullName(localStorage.getItem("fullName") || "");
  setEmail(localStorage.getItem("email") || "");
  setRole(localStorage.getItem("role") || "");
  setImage(localStorage.getItem("profileImage") || "");
}, []);

  const handleSave = () => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
localStorage.setItem("role", role);


    if (image) localStorage.setItem("profileImage", image);
    setIsEditing(false);
  };
  const handleClick=()=>{
    navigate("/dashboard");


  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[360px] space-y-4">

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-3xl font-bold">
            {image ? (
              <img src={image} alt="profile" className="w-full h-full object-cover" />
            ) : (
              fullName?.charAt(0) || "U"
            )}
          </div>

          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 text-sm"
            />
          )}
        </div>

        {/* Name */}
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          {isEditing ? (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          ) : (
            <p className="text-lg font-semibold">{fullName}</p>
            
          )}
        </div>

        {/* Email */}
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          {isEditing ? (
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          ) : (
            <p>{email}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <p className="text-gray-500 text-sm">Role</p>
          {isEditing ? (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded px-2 py-1 w-full"
            >
              <option value="">Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          ) : (
            <p>{role}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          {isEditing ? (
            <button
              onClick={handleSave}
              className="flex-1 bg-green-500 text-white py-2 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex-1 bg-blue-500 text-white py-2 rounded"
            >
              Edit Profile
            </button>
          )}
        </div>
     <button onClick={handleClick} className="p-2 rounded-full hover:bg-blue-100 transition">
  <i className="fa-solid fa-arrow-left text-xl 
     hover:text-blue-800 transition">
  </i>
</button>

      </div>
    </div>
  );
};

export default UserProfile;
