import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HotelManagement from "./components/HotelBooking";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<HotelManagement />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
