import React from 'react'
import './Calculator.css'
import Button from '../Components/Button'

const Calculator = () => {
    return(
        <div className="buttonsContainer">
            <Button text="7" value="7"/>
            <Button text="8" value="8"/>
            <Button text="8" value="9"/>
            <Button text="DEL" value=""/>
            <Button text="4" value="4"/>
            <Button text="5" value="5"/>
            <Button text="6" value="6"/>
            <Button text="+" value="+"/>
            <Button text="1" value="1"/>
            <Button text="2" value="2"/>
            <Button text="3" value="3"/>
            <Button text="-" value="-"/>
            <Button text="." value="."/>
            <Button text="0" value="0"/>
            <Button text="/" value="/"/>
            <Button text="X" value="*"/>
            <Button text="RESET" value=""/>
            <Button text="=" value=""/>
        </div>
    );
}

export default Calculator;