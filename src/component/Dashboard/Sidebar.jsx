import { LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo/wedlock.png";
import { adminSidebarItems, userSidebarItems } from "../../utils/options";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";

const Sidebar = ({sidebarOpen}) => {
    const { logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    
    const sidebarItems = isAdmin ? adminSidebarItems : userSidebarItems;

    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate("/");
            toast.success("Successfully Logged Out!");
          })
          .catch((err) => toast.error(err.message));
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 z-50 w-68 bg-white shadow-md transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0`}
        >
            <div className="p-6 ">
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
              
                <nav className="space-y-2 mt-6">
                    {sidebarItems.map((item) => {
                    const IconComponent = item.icon;

                    if (item.children) {
                        return (
                          <div key={item.label} className="space-y-1">
                            <div className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-semibold">
                                <div className="flex items-center space-x-3">
                                  <IconComponent className="h-5 w-5" />
                                  <span>{item.label}</span>
                                </div>
                                {item.label === "Settings" && (
                                  <span className="text-xs font-medium px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-sm animate-pulse">
                                    Running
                                  </span>
                                )}
                            </div>

                            <div className="ml-8 space-y-1">
                              {item.children.map((child) => {
                                const ChildIcon = child.icon;
                                return (
                                  <NavLink
                                    key={child.path}
                                    to={child.path}
                                    className={({ isActive }) =>
                                      `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all ${
                                        isActive
                                          ? "bg-gradient-to-r from-[#7a2f7b] to-[#455aa5] text-white"
                                          : "text-gray-600 hover:bg-gray-100"
                                      }`
                                    }
                                  >
                                    <ChildIcon className="h-4 w-4" />
                                    <span>{child.label}</span>
                                  </NavLink>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                                isActive
                                    ? "bg-gradient-to-r from-[#7a2f7b] to-[#455aa5] text-white shadow-lg"
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
                        onClick={handleLogOut}
                        className="w-full flex items-center space-x-3 px-4 py-3 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl transition-colors duration-200"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;