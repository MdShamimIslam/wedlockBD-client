import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatarImg from "../../../assets/profile/profile.jpg";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../../hooks/useAdmin";
import { navLinks } from "../../../utils/options";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Successfully Logged Out!");
      })
      .catch((err) => toast.error(err.message));
  };

  const menuItemClass = "px-4 py-3 hover:bg-pink-50 transition-colors font-medium text-gray-700 rounded-lg";

  return (
    <div className="relative mr-2 lg:mr-0" ref={dropdownRef}>
      {/* Menu Button */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-2 py-2 md:py-1 border border-neutral-200 rounded-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <AiOutlineMenu size={20} />
          <div className="hidden md:block">
            <img
              title={user ? user.displayName : ""}
              className="w-7 h-7 rounded-full object-cover"
              referrerPolicy="no-referrer"
              src={user?.photoURL || avatarImg}
              alt="profile"
            />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl overflow-hidden z-20 border border-gray-200">
          <div className="flex flex-col">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.href}
                className={({ isActive }) =>
                  `block md:hidden px-4 py-3 hover:bg-pink-50 transition-colors font-medium ${
                    isActive ? "bg-pink-100 text-pink-700 rounded-lg" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <hr className="my-4 border-gray-200 block md:hidden" />

            {user ? (
              <>
                <NavLink
                  to={isAdmin ? "/dashboard/admin-overview" : "/dashboard/overview"}
                  className={menuItemClass}
                >
                  Dashboard
                </NavLink>
                <div
                  onClick={handleLogOut}
                  className={`${menuItemClass} cursor-pointer`}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={menuItemClass}
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className={menuItemClass}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
