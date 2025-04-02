import React, { useState, useEffect } from "react";
import "./Laundry.css";

const LaundryService = () => {
  const [scheduledLaundry, setScheduledLaundry] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    const storedLaundry = JSON.parse(localStorage.getItem("laundryRequests")) || [];
    const userLaundry = storedLaundry.find(req => req.email === loggedInUser.email);
    if (userLaundry) {
      setScheduledLaundry(userLaundry);
    }
  }, []);

  const handleDelete = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    let storedLaundry = JSON.parse(localStorage.getItem("laundryRequests")) || [];
    storedLaundry = storedLaundry.filter(req => req.email !== loggedInUser.email);
    localStorage.setItem("laundryRequests", JSON.stringify(storedLaundry));
    
    setScheduledLaundry(null);
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Please log in first!");
      return;
    }

    const newLaundry = {
      email: loggedInUser.email,
      date: e.target.date.value,
      time: e.target.time.value,
      instructions: e.target.instructions.value || "None",
    };

    let storedLaundry = JSON.parse(localStorage.getItem("laundryRequests")) || [];
    storedLaundry = storedLaundry.filter(req => req.email !== loggedInUser.email);
    storedLaundry.push(newLaundry);
    localStorage.setItem("laundryRequests", JSON.stringify(storedLaundry));

    setScheduledLaundry(newLaundry);
  };

  return (
    <div className="laundry-container">
      <div className="laundry-box">
        <h2>Laundry Service</h2>
        {scheduledLaundry ? (
          <>
            <p><strong>Pickup Date:</strong> {scheduledLaundry.date}</p>
            <p><strong>Time Slot:</strong> {scheduledLaundry.time}</p>
            <p><strong>Special Instructions:</strong> {scheduledLaundry.instructions}</p>
            <button onClick={handleDelete}>Cancel Laundry Request</button>
          </>
        ) : (
          <form onSubmit={handleSchedule}>
            <label>Select Date:</label>
            <input type="date" name="date" required />
            
            <label>Select Time:</label>
            <input type="time" name="time" required />
            
            <label>Special Instructions (Optional):</label>
            <textarea name="instructions" placeholder="E.g., separate white clothes"></textarea>
            
            <button type="submit">Schedule Laundry</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LaundryService;
