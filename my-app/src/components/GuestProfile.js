import React, { useState, useEffect } from "react";
import "./GuestProfile.css";

const GuestProfile = () => {
  const [guest, setGuest] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [laundryRequests, setLaundryRequests] = useState([]);
  const [cleaningRequests, setCleaningRequests] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedGuest, setEditedGuest] = useState({});

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setGuest(loggedInUser);
      setEditedGuest(loggedInUser);

      const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookings(storedBookings.filter(b => b.email === loggedInUser.email));

      const storedLaundry = JSON.parse(localStorage.getItem("laundryRequests")) || [];
      if (Array.isArray(storedLaundry)) {
        setLaundryRequests(storedLaundry.filter(req => req.email === loggedInUser.email));
      }

      const storedCleaning = JSON.parse(localStorage.getItem("roomCleaningRequests")) || [];
      if (Array.isArray(storedCleaning)) {
        setCleaningRequests(storedCleaning.filter(req => req.email === loggedInUser.email));
      }
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedGuest({ ...editedGuest, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setGuest(editedGuest);
    localStorage.setItem("loggedInUser", JSON.stringify(editedGuest));
    setIsEditing(false);
  };

  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleDeleteLaundry = (index) => {
    const updatedLaundry = laundryRequests.filter((_, i) => i !== index);
    setLaundryRequests(updatedLaundry);
    localStorage.setItem("laundryRequests", JSON.stringify(updatedLaundry));
  };

  const handleDeleteCleaning = (index) => {
    const updatedCleaning = cleaningRequests.filter((_, i) => i !== index);
    setCleaningRequests(updatedCleaning);
    localStorage.setItem("roomCleaningRequests", JSON.stringify(updatedCleaning));
  };

  return (
    <div className="profile-page">
      {guest ? (
        <div className="profile-container">
          <div className="personal-info">
            <h2>Guest Profile</h2>
            {isEditing ? (
              <>
                <input type="text" name="name" value={editedGuest.name} onChange={handleInputChange} />
                <input type="email" name="email" value={editedGuest.email} onChange={handleInputChange} disabled />
                <input type="text" name="phone" value={editedGuest.phone || ""} onChange={handleInputChange} placeholder="Phone Number" />
                <input type="text" name="address" value={editedGuest.address || ""} onChange={handleInputChange} placeholder="Address" />
                <input type="date" name="dob" value={editedGuest.dob || ""} onChange={handleInputChange} placeholder="Date of Birth" />
                <input type="text" name="nationality" value={editedGuest.nationality || ""} onChange={handleInputChange} placeholder="Nationality" />
                <input type="text" name="idProof" value={editedGuest.idProof || ""} onChange={handleInputChange} placeholder="ID Proof (e.g., Passport, Aadhaar)" />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {guest.name}</p>
                <p><strong>Email:</strong> {guest.email}</p>
                <p><strong>Phone:</strong> {guest.phone || "Not provided"}</p>
                <p><strong>Address:</strong> {guest.address || "Not provided"}</p>
                <p><strong>Date of Birth:</strong> {guest.dob || "Not provided"}</p>
                <p><strong>Nationality:</strong> {guest.nationality || "Not provided"}</p>
                <p><strong>ID Proof:</strong> {guest.idProof || "Not provided"}</p>
                <button onClick={handleEditToggle}>Edit</button>
              </>
            )}
          </div>

          <div className="booking-section">
            <h3>Your Room Bookings</h3>
            {bookings.length > 0 ? (
              <ul>
                {bookings.map((booking, index) => (
                  <li key={index}>
                    <p><strong>Room:</strong> {booking.roomName}</p>
                    <p><strong>Check-in:</strong> {booking.checkinDate}</p>
                    <p><strong>Check-out:</strong> {booking.checkoutDate}</p>
                    <p><strong>Total Cost:</strong> ₹{booking.totalCost}</p>
                    <button onClick={() => handleDeleteBooking(index)}>Cancel Booking</button>
                  </li>
                ))}
              </ul>
            ) : <p>No active bookings.</p>}
          </div>

          <div className="services-section">
            <h3>Your Service Requests</h3>

            <h4>Laundry Requests</h4>
            {laundryRequests.length > 0 ? (
              <ul>
                {laundryRequests.map((req, index) => (
                  <li key={index}>
                    <p><strong>Pickup Date:</strong> {req.date}</p>
                    <p><strong>Time Slot:</strong> {req.time}</p>
                    <p><strong>Instructions:</strong> {req.instructions || "None"}</p>
                    <button onClick={() => handleDeleteLaundry(index)}>Cancel Laundry Request</button>
                  </li>
                ))}
              </ul>
            ) : <p>No active laundry requests.</p>}

            <h4>Room Cleaning Requests</h4>
            {cleaningRequests.length > 0 ? (
              <ul>
                {cleaningRequests.map((req, index) => (
                  <li key={index}>
                    <p><strong>Cleaning Date:</strong> {req.date}</p>
                    <p><strong>Time Slot:</strong> {req.time}</p>
                    <p><strong>Instructions:</strong> {req.specialRequest || "None"}</p>
                    <button onClick={() => handleDeleteCleaning(index)}>Cancel Cleaning Request</button>
                  </li>
                ))}
              </ul>
            ) : <p>No active room cleaning requests.</p>}
          </div>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default GuestProfile;
