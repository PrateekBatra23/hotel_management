import React, { useState, useEffect } from "react";
import "./RoomCleaningService.css";

const RoomCleaningService = () => {
  const [scheduledCleaning, setScheduledCleaning] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const storedCleaning = JSON.parse(localStorage.getItem("roomCleaningRequests")) || [];
    setScheduledCleaning(storedCleaning.filter(req => req.email === loggedInUser?.email));
  }, []);

  const handleDelete = (index) => {
    const updatedCleanings = scheduledCleaning.filter((_, i) => i !== index);
    setScheduledCleaning(updatedCleanings);
    localStorage.setItem("roomCleaningRequests", JSON.stringify(updatedCleanings));
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    const newCleaning = {
      email: loggedInUser?.email,
      date: e.target.date.value,
      time: e.target.time.value,
      specialRequest: e.target.specialRequest.value || "None",
    };

    const existingRequests = JSON.parse(localStorage.getItem("roomCleaningRequests")) || [];
    existingRequests.push(newCleaning);
    localStorage.setItem("roomCleaningRequests", JSON.stringify(existingRequests));

    setScheduledCleaning(existingRequests);
  };

  return (
    <div className="room-cleaning-container">
      <div className="cleaning-box">
        <h2>Room Cleaning Service</h2>
        {scheduledCleaning.length > 0 ? (
          <>
            {scheduledCleaning.map((req, index) => (
              <div key={index} className="cleaning-request">
                <p><strong>Date:</strong> {req.date}</p>
                <p><strong>Time:</strong> {req.time}</p>
                <p><strong>Special Request:</strong> {req.specialRequest}</p>
                <button onClick={() => handleDelete(index)}>Cancel Cleaning</button>
              </div>
            ))}
          </>
        ) : (
          <form onSubmit={handleSchedule}>
            <label>Select Date:</label>
            <input type="date" name="date" required />

            <label>Select Time:</label>
            <input type="time" name="time" required />

            <label>Special Requests (Optional):</label>
            <textarea name="specialRequest" placeholder="Any additional instructions"></textarea>

            <button type="submit">Schedule Cleaning</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RoomCleaningService;
