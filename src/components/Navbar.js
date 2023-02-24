import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <h1>SPA. React-route</h1>
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/publications">Publications</NavLink>
        <NavLink className="nav-link" to="/photos">Photos</NavLink>
        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
