import React from "react";

const CreditCard = (props) => {

    const { type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;
    
    const cardTypeImgSrc =
    type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png';

    const lastFourDigits = number.slice(-4);

    return (
        <div style={{ backgroundColor:
            bgColor,
            color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '15px',
            padding: '20px',
            width: '300px',
            height: '180px',
            boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)',
            boxSizing: 'border-box',}}
            >
      <img
        style={{ width: '80px', margin: '10px 0' }}
        src={cardTypeImgSrc}
        alt={type}
      />
      <p style={{ margin: '10px 0' }}>**** **** **** {lastFourDigits}</p>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <p style={{ margin: '0 10px', fontSize: '12px' }}>
          Expires {expirationMonth}/{expirationYear.toString().slice(-2)}
        </p>
        <p style={{ margin: '0 10px', fontSize: '12px' }}>{bank}</p>
      </div>
      <p style={{ margin: '0', fontSize: '16px', fontWeight: 'bold' }}>
        {owner}
      </p>
    </div>
  );}


export default CreditCard;  
    