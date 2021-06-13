import React from 'react'
import './Button.css'

const Button = ( { text, gridName, fontSize, bgColor, fontColor, shadowColor, className } ) => {
    const shadow = "0 -0.15em 0 0px " + shadowColor + " inset";
    let buttonClass = "btnStyle " + className;
    return(
        <div className={buttonClass}
        style={{
            gridArea:`${gridName}`,
            fontSize:`${fontSize}`,
            backgroundColor:`${bgColor}`,
            boxShadow:shadow,
            color:`${fontColor}`
            }}>
            <p>{text}</p>
        </div>
    );
}

export default Button;