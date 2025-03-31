import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HotelManagement from "./components/HotelBooking";
import BookingConfirmation from "./components/BookingConfirmation";
import LaundryService from "./components/LaundryService";
import RoomCleaningService from "./components/RoomCleaningService";
import DoNotDisturb from "./components/DoNotDisturb";  // Import DND component

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<HotelManagement />} />
        <Route path="/room-booking" element={<HotelManagement />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/laundry" element={<LaundryService />} />
        <Route path="/room-cleaning" element={<RoomCleaningService />} />
        <Route path="/do-not-disturb" element={<DoNotDisturb />} /> {/* DND Page */}
      </Routes>
    </>
  );
}

export default App;
