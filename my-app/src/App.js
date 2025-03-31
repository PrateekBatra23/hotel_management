import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HotelManagement from "./components/HotelBooking";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<HotelManagement />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
}
export default App;