import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, days, adultCount, childrenCount, totalCost, checkInDate, checkOutDate } = location.state || {};

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmed!</h1>
      <div className="confirmation-details">
        <h2>{room.name}</h2>
        <img src={room.image} alt={room.name} className="room-image" />
        <p><strong>Check-in Date:</strong> {checkInDate}</p>
        <p><strong>Check-out Date:</strong> {checkOutDate}</p>
        <p><strong>Adults:</strong> {adultCount}</p>
        <p><strong>Children:</strong> {childrenCount}</p>
        <p><strong>Total Nights:</strong> {days}</p>
        <p><strong>Total Cost:</strong> ₹{totalCost}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default BookingConfirmation;
