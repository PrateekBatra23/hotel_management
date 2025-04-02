import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 New Delhi</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@my-hotel.com</p>
        </div>

       
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">🌐 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          </div>
        </div>
      </div>

  
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My-Hotel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
