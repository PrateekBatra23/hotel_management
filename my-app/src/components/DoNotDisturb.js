import React, { useState } from "react";
import "./DoNotDisturb.css";

const DoNotDisturb = () => {
  const [isDndEnabled, setIsDndEnabled] = useState(false);
  const [scheduleStart, setScheduleStart] = useState("");
  const [scheduleEnd, setScheduleEnd] = useState("");

  const toggleDnd = () => {
    if (isDndEnabled) {
      setIsDndEnabled(false);
      alert("Do Not Disturb mode Deactivated");
    } else if (scheduleStart && scheduleEnd) {
      setIsDndEnabled(true);
      alert(`DND Scheduled from ${scheduleStart} to ${scheduleEnd}`);
    } else {
      setIsDndEnabled(true);
      alert("Do Not Disturb mode Activated");
    }
  };

  return (
    <div className="dnd-container">
      <h2>Do Not Disturb</h2>
      <p>{isDndEnabled ? "DND is currently ON" : "DND is currently OFF"}</p>

      <div className="dnd-scheduler">
        <label>Start Time:</label>
        <input type="time" value={scheduleStart} onChange={(e) => setScheduleStart(e.target.value)} />
        
        <label>End Time:</label>
        <input type="time" value={scheduleEnd} onChange={(e) => setScheduleEnd(e.target.value)} />
      </div>

      <button onClick={toggleDnd} className={isDndEnabled ? "active" : ""}>
        {isDndEnabled ? "Disable DND" : "Enable DND / Schedule"}
      </button>
    </div>
  );
};

export default DoNotDisturb;
