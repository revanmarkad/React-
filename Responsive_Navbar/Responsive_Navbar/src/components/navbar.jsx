import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../navbar.css";
function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    // TogglerIcon

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };
  return (
    <nav className="nav">
      <NavLink exact to="/" className="brand">
        <img
          className="brand"
          src=" https://cdn3.iconfinder.com/data/icons/credit-cards-pos/600/teller-512.png"
          alt=""
        />
      </NavLink>
      <ul id="column" className={active}>
        <li className="nav_item">
          <NavLink exact to="/" className="nav-link">
            Home{" "}
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink exact to="/About" className="nav-link">
            About{" "}
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink exact to="/Skills" className="nav-link">
            Skills{" "}
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink exact to="/Portfolio" className="nav-link">
            Portfolio{" "}
          </NavLink>
        </li>

        <li className="nav_item">
          <NavLink exact to="/Contact" className="nav-link">
            Contact{" "}
          </NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default Navbar;
