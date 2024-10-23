import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound"; // Assuming you created this
import AllRoutes from "./all_routes/AllRoutes";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Hamburger Menu for mobile */}
      <div className="sm:hidden fixed z-50 top-4 left-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-white bg-teal-700 p-1 rounded-lg focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Sidebar */}
      <div className="w-[20%] h-screen fixed">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="w-[100%] sm:w-[80%] ml-0 sm:ml-[20%]">
        <Navbar />
        <div>
          <AllRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;
