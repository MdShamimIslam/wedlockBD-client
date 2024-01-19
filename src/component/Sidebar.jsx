import logo from "../assets/logo/wedlock.png";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { IoIosGitPullRequest } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { logOut } = useAuth();
  const isAdmin = true;
  // const isAdmin = false;
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  //   logout
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <img src={logo} alt="" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to="/">
              <div className="w-[60px] hidden md:flex items-center ">
                <img src={logo} alt="" />
                <h3 className="text-2xl font-semibold">WedlockBD</h3>
              </div>
            </Link>
          </div>

          {isAdmin ? (
            <div className="flex space-y-3 flex-col justify-between flex-1 mt-6">
              {/* admin links */}

              <NavLink
                to="adminHome"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <IoHome /> <span className="ml-2 font-medium">Admin Dashboard</span>
              </NavLink>
              <NavLink
                to="manage-users"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUsersGear />{" "}
                <span className="ml-2 font-medium">Manage Users</span>
              </NavLink>
              <NavLink
                to="approved-premium"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <TbPremiumRights />{" "}
                <span className="ml-2 font-medium">Approved Premium</span>
              </NavLink>
              <NavLink
                to="approved-contact-request"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <TiContacts />{" "}
                <span className="ml-2 font-medium">Approved Request</span>
              </NavLink>
            </div>
          ) : (
            <div className="flex space-y-3 flex-col justify-between flex-1 mt-6">
              {/* user links */}
              <NavLink
                to="userHome"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <IoHome /> <span className="ml-2 font-medium">User Dashboard</span>
              </NavLink>
              <NavLink
                to="editBio"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaEdit />{" "}
                <span className="ml-2 font-medium">Edit Biodata</span>
              </NavLink>
              <NavLink
                to="viewBio"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <CiViewList />{" "}
                <span className="ml-2 font-medium">View Biodata</span>
              </NavLink>
              <NavLink
                to="myContactRequest"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <IoIosGitPullRequest />{" "}
                <span className="ml-2 font-medium">My Contact Request</span>
              </NavLink>
              <NavLink
                to="favoritesBio"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdFavoriteBorder />{" "}
                <span className="ml-2 font-medium">Favourites Biodata</span>
              </NavLink>
            </div>
          )}
        </div>

        <div>
          <hr />
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
