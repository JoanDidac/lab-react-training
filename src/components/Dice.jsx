import React, { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceImages = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [diceValue, setDiceValue] = useState(0);
  const [diceImage, setDiceImage] = useState(emptyDice);

  const rollDice = () => {
    setDiceImage(emptyDice);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setDiceImage(diceImages[randomValue]);
    }, 1000);
  };

  return (
    <div className='dice-container'> 
     <h1> They see me rollin'...</h1>
    <div className='dice'>
     <img
      src={diceImage}
      alt={`Dice with value ${diceValue}`}
      onClick={rollDice}
      style={{ cursor: 'pointer' }}
      />
    </div>
    </div>
    
    
  );
};

export default Dice;
