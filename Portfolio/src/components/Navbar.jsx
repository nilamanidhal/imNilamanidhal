import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" flex justify-around  lg:outline lg:outline-white/30 lg:rounded-bl-xl lg:font-semibold lg:shadow-xl/30">
      <NavLink
        id="custom-navlink"
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-amber-300 transition-all duration-100"
            : "text-white/80 transition-all duration-100"
        }
      >
        <span className="">About</span>
      </NavLink>

      <NavLink
        id="custom-navlink"
        to="/skill"
        className={({ isActive }) =>
          isActive
            ? "text-amber-300 transition-all duration-100"
            : "text-white/80 transition-all duration-100"
        }
      >
        Skills
      </NavLink>

      <NavLink
        id="custom-navlink"
        to="/project"
        className={({ isActive }) =>
          isActive
            ? "text-amber-300 transition-all duration-100"
            : "text-white/80 transition-all duration-100"
        }
      >
        Projects
      </NavLink>

      <NavLink
        id="custom-navlink"
        to="/achieve"
        className={({ isActive }) =>
          isActive
            ? "text-amber-300 transition-all duration-100"
            : "text-white/80 transition-all duration-100"
        }
      >
        Exprience
      </NavLink>

      <NavLink
        id="custom-navlink"
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-amber-300 transition-all duration-100"
            : "text-white/80 transition-all duration-100"
        }
      >
        Contact Me
      </NavLink>
    </nav>
  );
}

export default Navbar;
