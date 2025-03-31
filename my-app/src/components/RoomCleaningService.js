import React, { useState } from "react";
import "./RoomCleaningService.css";

const RoomCleaningService = () => {
  const [cleaningDate, setCleaningDate] = useState("");
  const [cleaningTime, setCleaningTime] = useState("");

  const handleCleaningRequest = () => {
    alert(`Room cleaning scheduled on ${cleaningDate} at ${cleaningTime}`);
  };

  return (
    <div className="cleaning-container">
      <h2>Schedule Room Cleaning</h2>
      <label>Cleaning Date:</label>
      <input type="date" value={cleaningDate} onChange={(e) => setCleaningDate(e.target.value)} />
      <label>Cleaning Time:</label>
      <input type="time" value={cleaningTime} onChange={(e) => setCleaningTime(e.target.value)} />
      <button onClick={handleCleaningRequest}>Schedule Cleaning</button>
    </div>
  );
};

export default RoomCleaningService;
