import React from "react";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={toggleSidebar} className="menu-button">
          ☰ Services
        </button>
        <h1>Hotel Name</h1>
      </div>
      <div className="nav-right">
        <button>Login</button>
        <button>Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
