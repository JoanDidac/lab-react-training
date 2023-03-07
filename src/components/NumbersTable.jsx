import React, { useState } from "react";

const NumbersTable = () => {
  const [limit, setLimit] = useState(1);

  const boxes = [];

  for (let i = 1; i <= limit; i++) {
    const boxStyle = {
      backgroundColor: "silver",
      color: "indigo",
      width: "50px",
      height: "50px",
      border: "1px solid black",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "2px",
      fontWeight: "bold",
      fontSize: "1.2em",
      borderRadius: "100px",
    };

    if (i % 2 === 0) {
      boxStyle.backgroundColor = "#FFC2C2";
    } else if (i > 2 && isPrime(i)) {
      boxStyle.backgroundColor = "#D7C2FF";
    } else if (i % 3 === 0) {
      boxStyle.backgroundColor = "#D0FFC2";
    }

    boxes.push(
      <div key={i} style={boxStyle}>
        {i}
      </div>
    );
  }

  const handleLimitChange = (event) => {
    const newLimit = Number(event.target.value);
    setLimit(newLimit);
  };

  return (
    <div className="input">
      <label htmlFor="limit-input">Enter limit:</label>
      <input
        id="limit-input"
        type="number"
        min="1"
        value={limit}
        onChange={handleLimitChange}
      />
      <div className="boxes-container">{boxes}</div>
    </div>
  );
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

export default NumbersTable;
