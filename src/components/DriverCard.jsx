import React from "react";

const DriverCard = ({ name, rating, img, car }) => {
  const stars = Math.round(rating);

  const getStars = () => {
    let starsString = "";
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starsString += "★";
      } else {
        starsString += "☆";
      }
    }
    return starsString;
  };

  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <p>{getStars()}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
