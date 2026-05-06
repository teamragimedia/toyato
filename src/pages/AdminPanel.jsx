import React, { useState } from "react";
import {
  FaChartBar,
  FaFileAlt,
  FaNewspaper,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

import Dashboard from "./Dashboard";
import Pitches from "./Pitches";
import AdminPress from "./AdminPress";
import CreateAdmin from "./CreateAdmin";
import AdminUsers from "./AdminUsers";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // ✅ Safe user fetch
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/admin/login";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🔥 SIDEBAR */}
      <div className="w-64 bg-[#0f172a] text-white flex flex-col justify-between">
        <div>
          <div className="p-6 text-xl font-bold border-b border-gray-700">
            Admin CRM
          </div>

          <div className="p-4 space-y-2">
            {/* Solutions */}
            <button
              onClick={() => setActiveTab("solutions")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                activeTab === "solutions" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              <FaChartBar /> Solutions
            </button>

            {/* Pitches */}
            <button
              onClick={() => setActiveTab("pitches")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                activeTab === "pitches" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              <FaFileAlt /> Pitches
            </button>

            {/* Press */}
            <button
              onClick={() => setActiveTab("press")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                activeTab === "press" ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              <FaNewspaper /> Press
            </button>

            {/* 👑 USERS (ONLY SUPER ADMIN) */}
            {user?.role === "superadmin" && (
              <button
                onClick={() => setActiveTab("users")}
                className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                  activeTab === "users" ? "bg-blue-600" : "hover:bg-gray-700"
                }`}
              >
                👥 Users
              </button>
            )}
          </div>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* 🔥 MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* 🔝 TOP NAVBAR */}
        <div className="h-16 bg-white shadow flex items-center justify-end px-6 relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="font-medium text-black">
              {user?.name || "Admin"}
            </span>
          </div>

          {/* 🔽 DROPDOWN */}
          {showMenu && (
            <div className="absolute right-6 top-16 bg-white shadow-lg rounded-lg w-48 py-2 z-50">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                onClick={() => {
                  setShowProfile(true);
                  setShowMenu(false);
                }}
              >
                Profile
              </button>

              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black"
                onClick={() => {
                  setActiveTab("createAdmin");
                  setShowMenu(false);
                }}
              >
                Create Admin
              </button>

              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* 📦 CONTENT */}
        <div className="p-6 overflow-auto text-black">
          {activeTab === "solutions" && <Dashboard />}
          {activeTab === "pitches" && <Pitches />}
          {activeTab === "press" && <AdminPress />}
          {activeTab === "createAdmin" && <CreateAdmin />}

          {/* 👑 USERS PAGE */}
          {activeTab === "users" && user?.role === "superadmin" && (
            <AdminUsers />
          )}
        </div>
      </div>

      {/* 🔥 PROFILE MODAL */}
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Admin Profile
            </h2>

            <div className="space-y-2 text-black">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Username:</strong> {user?.username}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Phone:</strong> {user?.phone}
              </p>
              <p>
                <strong>Role:</strong> {user?.role}
              </p>
            </div>

            <button
              onClick={() => setShowProfile(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
