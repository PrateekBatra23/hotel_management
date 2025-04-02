// src/components/RoomCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faTv, faNotesMedical, faPersonSwimming } from "@fortawesome/free-solid-svg-icons";

const RoomCard = ({ imageSrc, type, size }) => {
  return (
    <div className="room-card">
      <img className="image4" src={imageSrc} alt={`${type} Room`} />
      <div className="para_for_4_page">
        <p>{type} Room</p>
        <p>{size} square meter</p>
      </div>
      <div className="room-icons">
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faTv} />
        <FontAwesomeIcon icon={faNotesMedical} />
        <FontAwesomeIcon icon={faPersonSwimming} />
      </div>
    </div>
  );
};

export default RoomCard;
