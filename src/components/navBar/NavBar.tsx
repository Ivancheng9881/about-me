import React, { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuState = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">
        Ivan.dev
      </Link>
      <div
        className="menu"
        onClick={() => {
          changeMenuState();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
