import React, { useState } from "react";
import "./Laundry.css";

const Laundry = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleSchedule = () => {
    const laundryRequest = {
      date: selectedDate,
      timeSlot: timeSlot,
      specialInstructions: specialInstructions,
    };

    // Save the laundry request to localStorage
    localStorage.setItem("laundryRequest", JSON.stringify(laundryRequest));

    alert(`Laundry scheduled on ${selectedDate} at ${timeSlot}`);
  };

  return (
    <div className="laundry-container">
      <h2>Schedule Laundry Pickup</h2>
      <label>Pickup Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <label>Pickup Time Slot:</label>
      <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
        <option value="">Select Time</option>
        <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
        <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
      </select>

      <label>Special Instructions:</label>
      <textarea
        value={specialInstructions}
        onChange={(e) => setSpecialInstructions(e.target.value)}
      />

      <button className="schedule-button" onClick={handleSchedule}>
        Schedule Laundry
      </button>
    </div>
  );
};

export default Laundry;
