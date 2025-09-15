import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  Edit,
  Eye,
  Heart,
  MessageCircle,
  LogOut,
  UserPlus,
  BarChart3,
  Users,
  Crown,
  CheckCircle,
  Star,
  Settings,
  Menu,
  X
} from "lucide-react";
import useAuth from "../hooks/useAuth";
import logoImg from "../assets/logo/wedlock.png";


const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  // User Sidebar Items
  const userSidebarItems = [
    { path: "/dashboard/overview", label: "Overview", icon: BarChart3 },
    { path: "/dashboard/add-biodata", label: "Add Biodata", icon: UserPlus   },
    { path: "/dashboard/edit-biodata", label: "Edit Biodata", icon: Edit },
    { path: "/dashboard/view-biodata", label: "View Biodata", icon: Eye },
    { path: "/dashboard/contact-requests", label: "Contact Request", icon: MessageCircle },
    { path: "/dashboard/favorites", label: "Favourites", icon: Heart },
  ];

  // Admin Sidebar Items
  const adminSidebarItems = [
    { path: "/dashboard/admin-overview", label: "Overview", icon: BarChart3 },
    { path: "/dashboard/manage-users", label: "Manage Users", icon: Users },
    { path: "/dashboard/approved-premium", label: "Approved Pro", icon: Crown },
    { path: "/dashboard/approved-contact", label: "Contact Request", icon: CheckCircle },
    { path: "/dashboard/success-stories", label: "Success Stories", icon: Star },
    { path: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const sidebarItems = isAdmin ? adminSidebarItems : userSidebarItems;

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <img
              className="ml-[-10px] lg:ml-[-15px]"
              src={logoImg}
              alt="logo"
              width="70"
              height="70"
            />
            <h3 className="ml-[-10px] text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-700 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              WedlockBD
            </h3>
          </Link>

          {/* Navigation */}
          <nav className="space-y-2 mt-6">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#7a2f7b] to-[#455aa5] text-white shadow-lg"
                        // ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

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
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
