import React, { useState, useEffect } from "react";
import "./DoNotDisturb.css";

const DoNotDisturb = () => {
  const [isDndEnabled, setIsDndEnabled] = useState(false);


  useEffect(() => {
    const storedDndStatus = JSON.parse(localStorage.getItem("dndStatus"));
    if (storedDndStatus !== null) {
      setIsDndEnabled(storedDndStatus);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem("dndStatus", JSON.stringify(isDndEnabled));
  }, [isDndEnabled]);


  const toggleDnd = () => {
    setIsDndEnabled((prev) => !prev);
    alert(isDndEnabled ? "Do Not Disturb mode Deactivated" : "Do Not Disturb mode Activated");
  };

  return (
    <div className="dnd-bg">
      <div className="dnd-container">
        <h2>Do Not Disturb</h2>
        <p>{isDndEnabled ? "DND is currently ON" : "DND is currently OFF"}</p>
        <button onClick={toggleDnd} className={isDndEnabled ? "active" : ""}>
          {isDndEnabled ? "Turn OFF DND" : "Turn ON DND"}
        </button>
      </div>
    </div>
  );
};

export default DoNotDisturb;
