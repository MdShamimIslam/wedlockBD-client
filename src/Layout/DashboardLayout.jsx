import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu,X } from "lucide-react";
import Sidebar from "../component/Dashboard/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
    <div className="flex min-h-screen bg-gray-50">
     <Sidebar sidebarOpen={sidebarOpen}/>
      {/* Overlay for mobile */}
      { sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} /> }
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="sticky top-0 z-30 bg-white shadow-sm flex items-center justify-between px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 max-w-[100vw]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
