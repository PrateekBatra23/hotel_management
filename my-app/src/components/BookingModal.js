import React from "react";
import "./BookingModal.css";

const BookingModal = ({ show, onClose, details, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Booking Summary</h2>
        <p><strong>Check-in Date:</strong> {details.checkinDate}</p>
        <p><strong>Check-out Date:</strong> {details.checkoutDate}</p>
        <p><strong>Adults:</strong> {details.adults}</p>
        <p><strong>Children:</strong> {details.children}</p>
        <p><strong>Room Type:</strong> {details.roomName}</p>
        <p><strong>Total Cost:</strong> ₹{details.totalCost}</p>

        <div className="modal-actions">
          <button onClick={onClose}>Modify Details</button>
          <button onClick={onConfirm}>Confirm Booking</button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
