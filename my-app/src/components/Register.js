import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const newUser = { name, email, password };
    
    // Get existing users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if email already exists
    if (users.some(user => user.email === email)) {
      alert("Email already registered! Try logging in.");
      return;
    }
    
    // Save the new user
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
