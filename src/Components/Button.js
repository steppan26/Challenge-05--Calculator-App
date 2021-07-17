import React from 'react';
import './Button.css';

const Button = ( { text, gridName, fontSize, bgColor, fontColor, shadowColor } ) => {
    const shadow = "0 -0.2em 0 0px " + shadowColor + " inset";
    return(
        <div className="btn"
            style={{
                gridArea:gridName,
                fontSize:fontSize,
                backgroundColor:bgColor,
                boxShadow:shadow,
                color:fontColor
                }}
            >
            <p>{text}</p>
        </div>
    );
}

export default Button;