import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [guest, setGuest] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setGuest(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setGuest(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={toggleSidebar} className="menu-button">☰</button>
        <h1 className="hotel-name">My Hotel</h1>
      </div>

      <div className="nav-right">
        {guest ? (
          <div className="dropdown">
            <button 
              className="dropbtn" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {guest.name} ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <button onClick={() => navigate("/guest-profile")}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="auth-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="auth-button">Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
