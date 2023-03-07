import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-buttonleft" onClick={handleLeftClick}>Left</button>
      <img className="carousel-image" src={images[currentImageIndex]} alt="carousel" />
      <button className="carousel-button" onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default Carousel;
