import React from 'react'
import './Calculator.css'
import Button from '../Components/Button'

const Calculator = () => {
    return(
        <div className="buttonsContainer">
            <Button className="btnNumber" text="7" gridName="seven" fontSize="1.6em" fontColor="var(--clr-text-primary)" shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="8" gridName="eight" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="9" gridName="nine" fontSize="1.6m"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnDelete" text="DEL" gridName="del" fontSize="1.2em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-reset-bg)" shadowColor="var(--clr-keys-reset-shadow)"/>
            <Button className="btnNumber" text="4" gridName="four" fontSize="1.86m"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="5" gridName="five" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="6" gridName="six" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnModifier" text="+" gridName="plus" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="1" gridName="one" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="2" gridName="two" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="3" gridName="three" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnModifier" text="-" gridName="minus" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="." gridName="dot" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnNumber" text="0" gridName="zero" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnModifier" text="/" gridName="divide" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnModifier" text="x" gridName="multiply" fontSize="1.6em"  fontColor="var(--clr-text-primary)"shadowColor="var(--clr-keys-primary-shadow)"/>
            <Button className="btnReset" text="RESET" gridName="reset" fontSize="1.2em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-reset-bg)" shadowColor="var(--clr-keys-reset-shadow)"/>
            <Button className="btnSubmit" text="=" gridName="equals" fontSize="1.6em" fontColor="var(--clr-text-secondary)" bgColor="var(--clr-keys-equals-bg)" shadowColor="var(--clr-keys-equals-shadow)"/>
        </div>
    );
}

export default Calculator;