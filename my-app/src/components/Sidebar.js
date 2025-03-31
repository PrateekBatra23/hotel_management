import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Hotel Services</h2>
      <ul>
        <li onClick={() => { navigate("/room-booking"); toggleSidebar(); }}>Room Booking</li>
        <li onClick={() => { navigate("/laundry"); toggleSidebar(); }}>Laundry</li>
        <li onClick={() => { navigate("/room-cleaning"); toggleSidebar(); }}>Room Cleaning</li>
        <li onClick={() => { navigate("/do-not-disturb"); toggleSidebar(); }}>Do Not Disturb</li>
        <li>Food & Beverages</li>
      </ul>
      <button onClick={toggleSidebar}>Close</button>
    </div>
  );
};

export default Sidebar;
