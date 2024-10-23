import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    // Conditional rendering of sidebar based on isOpen state
    <div
      className={`h-screen bg-teal-700 w-[80%] sm:w-[20%] w-48 fixed z-50 top-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 sm:translate-x-0 flex flex-col justify-between p-4`}
    >
      {/* Close Button for Mobile */}
      <div className="text-white text-2xl cursor-pointer sm:hidden" onClick={toggleSidebar}>
        &times;
      </div>

      {/* Logo Section */}
      <div className="text-white text-4xl text-center font-bold mb-8">LOGO</div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => {
            navigate("/dashboard");
            toggleSidebar(); // Close the sidebar on navigation (mobile view)
          }}
          className={`${
            pathname === "/" || pathname === "/dashboard"
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          } py-2 px-4 rounded-lg`}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigate("/leads");
            toggleSidebar();
          }}
          className={`${
            pathname === "/leads" ? "bg-gray-800 text-white" : "bg-white text-black"
          } py-2 px-4 rounded-lg`}
        >
          Leads
        </button>
        <button
          onClick={() => {
            navigate("/analytics");
            toggleSidebar();
          }}
          className={`${
            pathname === "/analytics" ? "bg-gray-800 text-white" : "bg-white text-black"
          } py-2 px-4 rounded-lg`}
        >
          Analytics
        </button>
        <button
          onClick={() => {
            navigate("/reports");
            toggleSidebar();
          }}
          className={`${
            pathname === "/reports" ? "bg-gray-800 text-white" : "bg-white text-black"
          } py-2 px-4 rounded-lg`}
        >
          Reports
        </button>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="bg-white text-black py-2 px-4 rounded-lg w-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
