import React from 'react'
import './Calculator.css'
import Button from '../Components/Button'

const Calculator = () => {
    return(
        <div className="buttonsContainer">
            <Button text="7" gridName="seven" fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="8" gridName="eight"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="9" gridName="nine"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="DEL" gridName="del" fontSize="1.2em" fontColor="var(--clr-text-secondary)" shadowColor="var(--clr-keys-reset-shadow)" bgColor="var(--clr-keys-reset-bg)" />
            <Button text="4" gridName="four"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="5" gridName="five"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="6" gridName="six"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="+" gridName="plus"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="1" gridName="one"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="2" gridName="two"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="3" gridName="three"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="-" gridName="minus"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="." gridName="dot"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="0" gridName="zero"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="/" gridName="divide"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="x" gridName="multiply"  fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)" bgColor="var(--clr-keys-primary-bg)" />
            <Button text="RESET" gridName="reset" fontSize="1.2em" fontColor="var(--clr-text-secondary)" shadowColor="var(--clr-keys-reset-shadow)" bgColor="var(--clr-keys-reset-bg)" />
            <Button text="=" gridName="equals" fontColor="var(--clr-text-secondary)" shadowColor="var(--clr-keys-equals-shadow)" bgColor="var(--clr-keys-equals-bg)" />
        </div>
    );
}

export default Calculator;