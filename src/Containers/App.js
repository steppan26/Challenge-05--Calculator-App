
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';

 class App extends Component {
   constructor(){
     super();
     this.state = {
       theme: ["Theme1","Theme2","Theme3"],
       activeTheme: 0,
       screenText: 0,
       storedValue: 0,
       activeModifier: "+"
     }

   }

   componentDidMount(){
     this.createButtons()
   }
   createButtons = () =>{
    this.createThemeToggler()
    this.setHeadingFontColor()
    this.createNumberButtons()
    this.createDeleteButton()
    this.createResetButton()
    this.createModifierButtons()
    this.createSubmitButton()
   }

  createThemeToggler = () =>{
    const themeToggle = document.getElementById("themeSelector")
    themeToggle.addEventListener("click", () => {
      let activeTheme = this.state.activeTheme;
      if (activeTheme >= 2){
        activeTheme = 0
      } else {
        activeTheme = activeTheme + 1
      }
      this.setState({activeTheme: activeTheme})
      this.setHeadingFontColor();
    })
  }

  setHeadingFontColor = () =>{
    const screenText = document.getElementById("topSection")
    if(this.state.theme[this.state.activeTheme] === "Theme1"){
      screenText.style.color = "var(--clr-text-secondary)"
    } else {
      screenText.style.color = "var(--clr-text-primary)"
    }
  }

  createNumberButtons = () =>{
    const numberButtons = Array.from(document.getElementsByClassName("btnNumber"))
    numberButtons.forEach((btn)=>{
      btn.addEventListener("click", () =>{
        let screenText = this.state.screenText
        const screenTextString = String(screenText)
        if(btn.textContent === "."){ //check to see if there is already a decimal in the number and do nothing if there is
          if(screenTextString.includes(".")){
            return
          } else {
            screenText = `${screenText}${btn.textContent}`
            this.setState({screenText: screenText})
          }
        } else {
          screenText = `${screenText}${btn.textContent}`
          this.setState({screenText: screenText})
        }
        console.log(this.state.screenText)
      })
    })
  }

  createDeleteButton = () =>{
    const deleteButton = document.getElementsByClassName("btnDelete")
    deleteButton[0].addEventListener("click", () =>{
      let screenText = String(this.state.screenText) // convert screenText to a string for easy manipulation
      screenText = screenText.slice(0,-1) // remove last character then convert back to string before assigning to screenText
      this.setState({screenText:parseInt(screenText)})
    })

  }

  createResetButton = () =>{
    const resetButton = document.getElementsByClassName("btnReset")
    resetButton[0].addEventListener("click", () =>{
      this.setState({ screenText: "0", storedValue: "0" })
    })
  }

  createModifierButtons = () =>{
    const modifierButtons = Array.from(document.getElementsByClassName("btnModifier"))
    modifierButtons.forEach((btn)=>{
      btn.addEventListener("click", () =>{
        let newValue = this.applyModifier(btn.textContent)
        this.setState({
          storedValue:newValue,
          screenText: 0
        })
      })
    })
  }

  createSubmitButton = () =>{
    const submitButton = document.getElementsByClassName("btnSubmit")
    submitButton[0].addEventListener("click", (btn) =>{
      const total = this.applyModifier(btn.target.textContent)
      this.setState({
        screenText:total,
        storedValue:total
      })
    })

  }

  applyModifier = (modifier) =>{
    const storedValue = parseInt(this.state.storedValue, 10)
    const screenText = parseInt(this.state.screenText, 10)
    let newValue = storedValue
    console.log(modifier)
    switch(this.state.activeModifier){
      default:
        console.log("something else clicked")
        break
      case "+":
        newValue = storedValue + screenText
        break
      case "-":
        newValue = storedValue - screenText
        break
      case "x":
        newValue = storedValue * screenText
        break
      case "/":
        newValue = storedValue / screenText
        break
      case "=":
        break
      }
      this.setState({activeModifier:modifier})
    return parseInt(newValue, 10)
  }

  render(){
    let themeClassName = "App " + this.state.theme[this.state.activeTheme];
    return (
      <div className="AppContainer">
        <div className={themeClassName}>
          <Header activeTheme={this.state.theme[this.state.activeTheme]} screenText={this.state.screenText}/>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
