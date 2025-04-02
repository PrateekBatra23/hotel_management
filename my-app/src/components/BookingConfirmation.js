import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state || {};

  console.log("Booking Details:", booking); 

  if (!booking.roomName) {
    return <h2>No Booking Found. Please book a room first.</h2>;
  }

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmed! 🎉</h1>

      <div className="booking-details">
      
        <img 
          src={booking.roomImage || "https://via.placeholder.com/300"} 
          alt={booking.roomName} 
          className="room-image" 
        />

        <div className="details-section">
          <h2>{booking.roomName}</h2>
          <p><strong>Guest Name:</strong> {booking.guestName || "N/A"}</p>
          <p><strong>Check-in:</strong> {booking.checkinDate}</p>
          <p><strong>Check-out:</strong> {booking.checkoutDate}</p>
          <p><strong>Adults:</strong> {booking.adults} | <strong>Children:</strong> {booking.children}</p>
          <p><strong>Booking Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Total Cost:</strong> ₹{booking.totalCost}</p>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="home-button">Back to Home</button>
    </div>
  );
};

export default BookingConfirmation;
