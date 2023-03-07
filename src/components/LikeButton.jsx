import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = [
    'rgb(128,0,128)',   // purple
    'rgb(0,0,255)',     // blue
    'rgb(0,128,0)',     // green
    'rgb(255,255,0)',   // yellow
    'rgb(255,165,0)',   // orange
    'rgb(255,0,0)',     // red
    'rgb(139,69,19)',   // brown
    'rgb(255,192,203)', // pink
    'rgb(255,0,255)',   // magenta
    'rgb(0,255,255)',   // cyan
    'rgb(128,128,0)',   // olive
    'rgb(165,42,42)',   // maroon
    'rgb(0,128,128)',   // teal
    'rgb(128,0,0)',     // maroon
    'rgb(255,215,0)',   // gold
    'rgb(218,165,32)',  // goldenrod
    'rgb(0,0,128)',     // navy
    'rgb(128,128,128)', // gray
    'rgb(255,255,255)', // white
    'rgb(0,0,0)'        // black
  ];
  
  const [colorIndex, setColorIndex] = useState(0);
  const [divColorIndex, setDivColorIndex] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);

    if ((likes + 1 )% 5 === 0) {
        setColorIndex((colorIndex + 1) % colors.length);
        setDivColorIndex((divColorIndex + 1) % colors.length);
      }
  };

  return (
    <div className='like-container' style={{
        background: `radial-gradient(${colors[divColorIndex]}, transparent)`
      }}>
    <button className='like-btn'
      onClick={handleClick}
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {likes} Likes
    </button>
    </div>
    
    
  );
};

export default LikeButton;
