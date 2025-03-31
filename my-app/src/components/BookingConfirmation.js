import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  return (
    <div className="booking-confirmation-container">
      <h1>Booking Confirmed!</h1>
      {data.room ? (
        <div className="booking-details">
          <h2>{data.room.name}</h2>
          <img src={data.room.image} alt={data.room.name} className="room-image" />
          <p><strong>Check-in:</strong> {data.checkInDate || "N/A"}</p>
          <p><strong>Check-out:</strong> {data.checkOutDate || "N/A"}</p>
          <p><strong>Adults:</strong> {data.adultCount || "N/A"}</p>
          <p><strong>Children:</strong> {data.childrenCount || "N/A"}</p>
          <p><strong>Total Nights:</strong> {data.days || "N/A"}</p>
          <p><strong>Total Cost:</strong> ₹{data.totalCost || "N/A"}</p>
        </div>
      ) : (
        <p>No booking details available.</p>
      )}
      <button className="confirm-btn" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};
export default BookingConfirmation;
