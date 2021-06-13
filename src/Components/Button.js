import React from 'react'
import './Button.css'

const Button = ( { text, name, fontSize, bgColor, fontColor, shadowColor } ) => {
    const shadow = "0 -0.15em 0 0px " + shadowColor + " inset";
    console.log(fontColor)
    return(
        <div className="btn"
        style={{
            gridArea:`${name}`,
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