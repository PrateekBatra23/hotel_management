import React from "react";
import "./Home.css";
import RoomCard from "./RoomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faDumbbell, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faXTwitter, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const rooms = [
    { image: "/photos/14.jpg", type: "Standard", size: "30" },
    { image: "/photos/15.jpg", type: "Luxury", size: "50" },
    { image: "/photos/16.jpg", type: "Special", size: "70" },
  ];

  return (
    <div id="main">

      {/* Front Page */}
      <div id="front_page">
        <img id="image" src="/photos/12.jpg" alt="Hotel View" />
      </div>

      {/* Page 2 */}
      <div id="page2">
        <p id="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi neque soluta tempore iusto ducimus voluptatem...
        </p>
      </div>

      {/* Page 3 */}
      <div id="page3">
        <img id="image1" src="/photos/13.jpg" alt="Hotel Interior" />
      </div>

      {/* Rooms Section */}
      <div id="page4">
        {rooms.map((room, index) => (
          <RoomCard key={index} imageSrc={room.image} type={room.type} size={room.size} />
        ))}
      </div>

      {/* Features Section */}
      <div id="page5">
        <h1>Features</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
        <div className="features_icons">
          <FontAwesomeIcon icon={faSpa} />
          <FontAwesomeIcon icon={faDumbbell} />
          <FontAwesomeIcon icon={faLeaf} />
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <div id="our_company_title">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Investors</p>
          <p>Travel Diaries</p>
          <p>Awards</p>
        </div>
        <p>&copy;2025 My Hotel, All rights reserved</p>
        <p>Follow Us</p>
        <div className="social_media">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
      </div>
    </div>
  );
};

export default Home;
