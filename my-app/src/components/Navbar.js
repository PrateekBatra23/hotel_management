import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  const [guest, setGuest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setGuest(loggedInUser); // Update state with logged-in user
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setGuest(null); // Clear guest state on logout
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button onClick={toggleSidebar} className="menu-button">
          ☰ Services
        </button>
        <h1>Hotel Name</h1>
      </div>
      <div className="nav-right">
        {guest ? (
          <>
            <button onClick={() => navigate("/guest-profile")}>
              {guest.name}'s Profile
            </button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
