import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>Hotel Services</h2>
      <ul>
        <li>Laundry</li>
        <li>Room Cleaning</li>
        <li>Do Not Disturb</li>
        <li>Food & Beverages</li>
      </ul>
      <button onClick={toggleSidebar}>Close</button>
    </div>
  );
};

export default Sidebar;
