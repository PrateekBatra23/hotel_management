import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HotelManagement from "./components/HotelBooking";
import BookingConfirmation from "./components/BookingConfirmation";
import LaundryService from "./components/LaundryService";
import RoomCleaningService from "./components/RoomCleaningService";
import DoNotDisturb from "./components/DoNotDisturb";
import Login from "./components/Login";
import Register from "./components/Register";
import GuestProfile from "./components/GuestProfile";
import Home from "./components/Home";
import Footer from "./components/Footer"; // 
import StorageViewer from './components/StorageViewer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guest-profile" element={<GuestProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/room-booking" element={<HotelManagement />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/laundry" element={<LaundryService />} />
          <Route path="/room-cleaning" element={<RoomCleaningService />} />
          <Route path="/do-not-disturb" element={<DoNotDisturb />} />
          <Route path="/storage-viewer" element={<StorageViewer />} />
        </Routes>
      </div>

      <Footer /> 
    </>
  );
}

export default App;
