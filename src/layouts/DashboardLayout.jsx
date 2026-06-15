import { Outlet } from "react-router";
import AppSidebar from "../components/AppSidebar";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const handleSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className="flex h-screen
overflow-hidden w-full"
    >
      <AppSidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <div className="flex-1 p-4 overflow-y-auto">
        <Navbar handleSidebar={handleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
