import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/logo/wedlock.png";
import MenuDropdown from "./MenuDropdown";
import "./MenuDropdown.css";

const Navbar = () => {
  return (
    <div className="flex flex-row  items-center justify-between gap-3 md:gap-0 mt-4">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          className=""
          src={logoImg}
          alt="logo"
          width="70"
          height="70"
        />
        <h3 className="md:text-3xl text-2xl  font-bold">WedlockBD</h3>
      </Link>
      <div className="hidden md:block">
        <ul className="  flex items-center gap-10">
          <nav className="sidebar">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
          </nav>
          <nav className="sidebar">
            <NavLink to="/biodatas">
              <li>Biodatas</li>
            </NavLink>
          </nav>
          <nav className="sidebar">
            <NavLink to="/about">
              <li>About Us</li>
            </NavLink>
          </nav>
          <nav className="sidebar">
            <NavLink to="/contact">
              <li>Contact Us</li>
            </NavLink>
          </nav>
        </ul>
      </div>
      {/* Dropdown Menu */}
      <MenuDropdown />
    </div>
  );
};

export default Navbar;
