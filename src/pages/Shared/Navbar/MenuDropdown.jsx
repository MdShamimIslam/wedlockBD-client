import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avatarImg from "../../../assets/profile/profile.jpg";
import useAuth from "../../../hooks/useAuth";
import "./MenuDropdown.css";
import toast from "react-hot-toast";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      navigate('/');
      toast.success('Logout Successfully !!')
    })
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {/* Avatar */}
            <img
            // title={`${user?.displayName}`}
            title={user?`${user?.displayName}`:''}
              className="rounded-full"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 rounded-xl shadow-md w-[40vw] md:w-[12vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <nav className="sidebar">
              <NavLink
                to="/"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Home
              </NavLink>
            </nav>

            <nav className="sidebar">
              <NavLink
                to="/biodatas"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Biodatas
              </NavLink>
            </nav>
            <nav className="sidebar">
              <NavLink
                to="/contact"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Contact Us
              </NavLink>
            </nav>
            <nav className="sidebar">
              <NavLink
                to="/about"
                className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                About Us
              </NavLink>
            </nav>

            {user ? (
              <>
                <nav className="sidebar">
                  <NavLink
                    to="/dashboard"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Dashboard
                  </NavLink>
                </nav>
                <div
                  onClick={handleLogOut}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
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
