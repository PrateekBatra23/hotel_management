import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HotelManagement.css";
import standardImg from "../pics/Standard.jpeg";
import luxuryImg from "../pics/Luxury.jpeg";
import specialImg from "../pics/Special.jpeg";

const rooms = [
  {
    name: "Standard Room",
    basePrice: 3000,
    extraAdult: 800,
    extraChild: 500,
    image: standardImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Room Size: 250 sq ft"]
  },
  {
    name: "Luxury Room",
    basePrice: 5000,
    extraAdult: 900,
    extraChild: 500,
    image: luxuryImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Mini Bar", "Room Size: 350 sq ft"]
  },
  {
    name: "Special Room",
    basePrice: 7000,
    extraAdult: 1000,
    extraChild: 500,
    image: specialImg,
    details: ["Wifi", "Swimming Pool", "Breakfast Included", "AC", "Private Balcony", "Room Size: 500 sq ft"]
  }
];

const HotelManagement = () => {
  const [days, setDays] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const calculatePrice = (room) => {
    let extraAdult = adultCount > 1 ? adultCount - 1 : 0;
    return days * (room.basePrice + extraAdult * room.extraAdult + childrenCount * room.extraChild);
  };

  const handleBooking = (room) => {
    setSelectedRoom(room);
    navigate("/booking-confirmation", {
      state: {
        room,
        days,
        adultCount,
        childrenCount,
        totalCost: calculatePrice(room),
      },
    });
  };

  return (
    <div className="hotel-container">
      <div className="bookinginput">
        <label>Check-in Date:</label>
        <input type="date" onChange={(e) => setDays(e.target.value ? 1 : 0)} />
        <label>Check-out Date:</label>
        <input type="date" />
        <label>Adults:</label>
        <input type="number" min="1" value={adultCount} onChange={(e) => setAdultCount(Number(e.target.value))} />
        <label>Children:</label>
        <input type="number" min="0" value={childrenCount} onChange={(e) => setChildrenCount(Number(e.target.value))} />
      </div>
      <div className="bookingdetails">
        {rooms.map((room, index) => (
          <div className="room" key={index}>
            <img src={room.image} alt={room.name} />
            <div>
              <h1>{room.name}</h1>
              <ul>
                {room.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p>Base Price (1 Adult / Day): ₹{room.basePrice}</p>
              <p>Your Total Cost: ₹{calculatePrice(room)}</p>
              <button onClick={() => handleBooking(room)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelManagement;
