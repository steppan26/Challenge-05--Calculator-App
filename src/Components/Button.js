import React from 'react'
import './Button.css'

const Button = ( { text, value }) => {
    return(
        <div className = "btn">
            <p>{text}</p>
        </div>
    );
}

export default Button;