import React from 'react'
import './Calculator.css'
import Button from '../Components/Button'

const Calculator = () => {
    return(
        <div className="buttonsContainer">
            <Button text="7" name="seven" fontSize="1.6em" fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="8" name="eight" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="9" name="nine" fontSize="1.6m"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="DEL" name="del" fontSize="1.2em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-reset-bg)" shadowColor="var(--clr-keys-reset-shadow)"/>
            <Button text="4" name="four" fontSize="1.86m"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="5" name="five" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="6" name="six" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="+" name="plus" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="1" name="one" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="2" name="two" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="3" name="three" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="-" name="minus" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="." name="dot" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="0" name="zero" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="/" name="divide" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="x" name="multiply" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button text="RESET" name="reset" fontSize="1.2em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-reset-bg)" shadowColor="var(--clr-keys-reset-shadow)"/>
            <Button text="=" name="equals" fontSize="1.6em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-equals-bg)" shadowColor="var(--clr-keys-equals-shadow)"/>
        </div>
    );
}

export default Calculator;