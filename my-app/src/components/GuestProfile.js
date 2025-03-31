import React, { useState, useEffect } from "react";
import "./GuestProfile.css"; // Import CSS

const GuestProfile = () => {
  const [guest, setGuest] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [dndStatus, setDndStatus] = useState(null);
  const [laundryRequest, setLaundryRequest] = useState(null);
  const [roomCleaningRequest, setRoomCleaningRequest] = useState(null);

  useEffect(() => {
    // Get logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("Logged in user:", loggedInUser); // 🔍 Debugging

    if (loggedInUser) {
      setGuest(loggedInUser);
    }

    // Get DND status from localStorage
    const storedDndStatus = JSON.parse(localStorage.getItem("dndStatus"));
    setDndStatus(storedDndStatus ? storedDndStatus.isEnabled : false);

    // Get laundry request status from localStorage
    const storedLaundryRequest = JSON.parse(localStorage.getItem("laundryRequest"));
    setLaundryRequest(storedLaundryRequest);

    // Get room cleaning request status from localStorage
    const storedRoomCleaningRequest = JSON.parse(localStorage.getItem("roomCleaningRequest"));
    setRoomCleaningRequest(storedRoomCleaningRequest);
  }, []);

  // Fetch bookings AFTER guest is set
  useEffect(() => {
    if (guest) {
      fetchBookings();
    }
  }, [guest]);

  const fetchBookings = () => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log("All stored bookings:", allBookings); // 🔍 Debugging

    if (guest?.email) {
      const userBookings = allBookings.filter(
        (booking) => booking.email === guest.email
      );
      console.log("Filtered user bookings:", userBookings); // 🔍 Debugging
      setBookings(userBookings);
    }
  };

  const refreshBookings = () => {
    fetchBookings(); // Re-fetch bookings after confirmation
  };

  if (!guest) {
    return (
      <div className="guest-profile">
        <div className="profile-container">
          <h1>Guest Profile</h1>
          <p>No user found. Please log in.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="guest-profile">
      <div className="profile-container">
        <h1>{guest.name}'s Profile</h1>
        <p><strong>Email:</strong> {guest.email}</p>
        <p><strong>Phone:</strong> {guest.phone || "N/A"}</p>

        <h2>Past Bookings</h2>
        {bookings.length > 0 ? (
          <ul className="booking-list">
            {bookings.map((booking, index) => (
              <li key={index} className="booking-item">
                <p><strong>Room:</strong> {booking.roomName}</p>  
                <p><strong>Check-in:</strong> {booking.checkinDate}</p> 
                <p><strong>Check-out:</strong> {booking.checkoutDate}</p> 
                <p><strong>Adults:</strong> {booking.adults}</p> 
                <p><strong>Children:</strong> {booking.children}</p> 

              </li>
            ))}
          </ul>
        ) : (
          <p>No past bookings found.</p>
        )}

        <h2>Current Requests</h2>
        <p><strong>Do Not Disturb (DND) Status:</strong> {dndStatus ? "Active" : "Inactive"}</p>
        <p><strong>Laundry Request:</strong> {laundryRequest ? `Scheduled on ${laundryRequest.date} at ${laundryRequest.timeSlot}` : "No Laundry Request"}</p>
        <p><strong>Room Cleaning Request:</strong> {roomCleaningRequest ? `Scheduled on ${roomCleaningRequest.date} at ${roomCleaningRequest.time}` : "No Room Cleaning Request"}</p>
      </div>
    </div>
  );
};

export default GuestProfile;
