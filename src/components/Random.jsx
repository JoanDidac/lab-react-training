import React from "react";

const Random = (props) => {
    const {min,max} = props;
    const randomNumber = Math.floor(Math.random() * (max - min) + min) + 1;
    return  (
        <div>
            Random Number between {max} and {min} : {randomNumber}
        </div>
    )
}

export default Random;