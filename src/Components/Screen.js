import React from 'react'
import './Screen.css'

const Screen = ({screenText}) => {
    const numberWithCommas = (x) => {
    if(screenText >=1) {
        x = x.toString().replace(/^0+/, '')
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else if(screenText === 0){
        return "0"
    } else {
        return screenText.toString()
    }
    }
    let formatedScreenText = numberWithCommas(screenText).substring(0,14)

    return(
        <div className="screen" id="screenText">
            <h2>{formatedScreenText}</h2>
        </div>
    );
}

export default Screen;