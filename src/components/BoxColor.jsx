import React from "react";

const BoxColor = (props) => {
    const {r,g,b} = props;
    const backgroundColor = `rgb(${r}, ${g} , ${b})`;

    return (
        <div className="boxcolor" style={{backgroundColor}}>
            <p>
                rgb({r}{g}{b})
            </p>
        </div>
    )
}

 export default BoxColor;