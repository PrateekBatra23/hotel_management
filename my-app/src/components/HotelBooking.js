import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HotelManagement.css";
import BookingModal from "./BookingModal"; // ✅ Ensure this is correctly imported
import standardImg from "../pics/Standard.jpeg";
import luxuryImg from "../pics/Luxury.jpeg";
import specialImg from "../pics/Special.jpeg";
import deluxeImg from "../pics/Deluxe.jpeg";
import presidentialImg from "../pics/Presidential.jpeg";

const rooms = [
  {
    name: "Standard Room",
    basePrice: 3000,
    extraAdult: 800,
    extraChild: 500,
    image: standardImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Room Size: 250 sq ft"],
  },
  {
    name: "Luxury Room",
    basePrice: 5000,
    extraAdult: 900,
    extraChild: 500,
    image: luxuryImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Mini Bar", "Room Size: 350 sq ft"],
  },
  {
    name: "Special Room",
    basePrice: 7000,
    extraAdult: 1000,
    extraChild: 500,
    image: specialImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Private Balcony", "Room Size: 500 sq ft"],
  },
  {
    name: "Deluxe Room",
    basePrice: 9000,
    extraAdult: 1200,
    extraChild: 600,
    image: deluxeImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Smart TV", "Room Size: 600 sq ft"],
  },
  {
    name: "Presidential Suite",
    basePrice: 15000,
    extraAdult: 1500,
    extraChild: 800,
    image: presidentialImg,
    details: ["Wifi", "Private Pool", "Breakfast Included", "AC", "Personal Butler", "Room Size: 1000 sq ft"],
  }
];

const HotelManagement = () => {
  const [days, setDays] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("bookings")) || []); // Manage bookings state
  const navigate = useNavigate();

  const calculateDays = () => {
    if (!checkInDate || !checkOutDate) return 1;
    const inDate = new Date(checkInDate);
    const outDate = new Date(checkOutDate);
    return Math.max(1, (outDate - inDate) / (1000 * 60 * 60 * 24));
  };

  const calculatePrice = (room) => {
    if (!room) return 0; // ✅ Prevents crash when no room is selected
    let extraAdult = adultCount > 1 ? adultCount - 1 : 0;
    return calculateDays() * (room.basePrice + extraAdult * room.extraAdult + childrenCount * room.extraChild);
  };

  const handleBookNow = (room) => {
    console.log("Booking Room:", room); // ✅ Debugging
    setSelectedRoom(room);
    setShowModal(true); // ✅ Show modal instead of navigating immediately
  };

  const confirmBooking = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")); // Get current user
  
    const newBooking = {
      roomName: selectedRoom.name, // Fixed key from 'room' to 'roomName' to match stored data
      checkinDate: checkInDate,
      checkoutDate: checkOutDate,
      adults: adultCount,
      children: childrenCount,
      totalCost: calculatePrice(selectedRoom),
      email: loggedInUser?.email || "unknown", // 🔥 Add guest email
    };
  
    // Only update bookings when the user confirms
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings); // Update state
    localStorage.setItem("bookings", JSON.stringify(updatedBookings)); // Save to localStorage
  
    setShowModal(false);
    navigate("/booking-confirmation", { state: newBooking });
  };
  

  return (
    <>
      <div className="hotel-container">
        <div className="booking-input">
          <label>Check-in Date:</label>
          <input type="date" onChange={(e) => setCheckInDate(e.target.value)} />
          <label>Check-out Date:</label>
          <input type="date" onChange={(e) => setCheckOutDate(e.target.value)} />
          <label>Adults:</label>
          <input type="number" min="1" value={adultCount} onChange={(e) => setAdultCount(Number(e.target.value))} />
          <label>Children:</label>
          <input type="number" min="0" value={childrenCount} onChange={(e) => setChildrenCount(Number(e.target.value))} />
        </div>

        <div className="room-container">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.image} alt={room.name} className="room-image" />
              <h2>{room.name}</h2>
              <ul>
                {room.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p>Base Price (1 Adult / Day): ₹{room.basePrice}</p>
              <p>Your Total Cost: ₹{calculatePrice(room)}</p>
              <button className="book-button" onClick={() => handleBookNow(room)}>Book Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Move modal OUTSIDE the hotel-container to prevent layout issues */}
      <BookingModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmBooking}  // Confirm booking only adds to localStorage here
        details={{
          checkinDate: checkInDate,
          checkoutDate: checkOutDate,
          adults: adultCount,
          children: childrenCount,
          roomName: selectedRoom?.name,
          totalCost: calculatePrice(selectedRoom),
        }}
      />
    </>
  );
};

export default HotelManagement;
