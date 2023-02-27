import React from 'react';

const Rating = ({ children }) => {
  const rating = Math.round(children * 2) / 2;
  const filledStar = '★';
  const emptyStar = '☆';
  const stars = [];

  for (let i = 0; i < 5; i++) {
   if ( i < rating){
   stars.push(filledStar);
  }else {
    stars.push (emptyStar);
  }
}
  return (
    <div className='stars-container'>
      {stars}
    </div>
  );
};

export default Rating;