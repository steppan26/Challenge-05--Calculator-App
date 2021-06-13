import React from 'react'
import './Screen.css'

const Screen = ({screenText}) => {
    const numberWithCommas = (x) => {
    if(screenText !== 0) {
        x = x.toString().replace(/^0+/, '')
    }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let formatedScreenText = numberWithCommas(screenText)

    return(
        <div className="screen" id="screenText">
            <h2>{formatedScreenText}</h2>
        </div>
    );
}

export default Screen;