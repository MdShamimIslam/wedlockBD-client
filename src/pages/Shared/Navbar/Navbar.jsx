import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/logo/wedlock.png";
import MenuDropdown from "./MenuDropdown";
import { navLinks } from '../../../utils/options';

const Navbar = () => {

  return (
    <div className="flex flex-row items-center justify-between gap-3 md:gap-0 mt-4">
      <Link to="/" className="flex items-center">
        <img
          className="ml-[-10px] lg:ml-[-15px]"
          src={logoImg}
          alt="logo"
          width="70"
          height="70"
        />
        <h3 className="ml-[-10px] text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-700 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          WedlockBD
        </h3>
      </Link>

      <div className="hidden md:block">
        <ul className="flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={index}> 
              <NavLink
                to={link.href}
                className={({ isActive }) => isActive ? "text-blue-500 font-semibold" : undefined }
              > 
                {link.name}
              </NavLink>
          </li>
          ))}
        </ul>
      </div>
      
      <MenuDropdown />
    </div>
  );
};

export default Navbar;
