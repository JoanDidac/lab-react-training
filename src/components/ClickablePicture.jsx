import React, { useState } from 'react';
import foto1 from '../assets/images/P1046453.JPG';
import foto2 from '../assets/images/P1046458.JPG';
import foto3 from '../assets/images/P1046459.JPG';
import foto4 from '../assets/images/P1046460.JPG';


const imgList = [foto1,foto2,foto3,foto4];

const ClickablePicture = ({ imgList }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleClick = () => {
    setCurrentImgIndex((currentImgIndex + 1) % imgList.length);
  };

  return (
   
    <div className='gif-container'>

    <h2 className='gif-header'>How to make a simple gif very complicated:</h2>
    
    <img
     className='clickableImg'
      src={imgList[currentImgIndex]}
      alt="ClickableImg"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      
    />
    </div>
    
  );
};

export default ClickablePicture;
