
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
    this.createThemeToggler()
    this.setHeadingFontColor()
    this.createButtons()
   }

   createButtons = () =>{
    const buttonsArray = Array.from(document.getElementsByClassName("btn"))

    // add onClick eventlistener to all buttons
    buttonsArray.forEach((btn)=>{
      btn.addEventListener("click", (event) =>{
        this.getKeyCode(event.target.textContent, buttonsArray)
      },
      false
      )
    })
    // add keypress event listeners for keynum use
    document.addEventListener("keydown", (event) =>{this.getKeyCode(parseInt(event.keyCode), buttonsArray)}) //add event listener to all buttons, then call getKeyCode function on keypress with the key code being converted to Int before being passed through
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

  getKeyCode = (key, buttonsArray) =>{
    switch(key){
      default:
        break
      case "0":
        //fallsthrough
      case 48:
        //fallsthrough
      case 96:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "0"){
            this.numberButtonInput(button)
          }
        })
        break
      case "1":
        //fallsthrough
      case 49:
        //fallsthrough
      case 97:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "1"){
            this.numberButtonInput(button)
          }
        })
        break
      case "2":
        //fallsthrough
      case 50:
        //fallsthrough
      case 98:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "2"){
            this.numberButtonInput(button)
          }
        })
        break
      case "3":
        //fallsthrough
      case 51:
        //fallsthrough
      case 99:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "3"){
            this.numberButtonInput(button)
          }
        })
        break
      case "4":
        //fallsthrough
      case 52:
        //fallsthrough
      case 100:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "4"){
            this.numberButtonInput(button)
          }
        })
        break
      case "5":
        //fallsthrough
      case 53:
        //fallsthrough
      case 101:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "5"){
            this.numberButtonInput(button)
          }
        })
      break
      case "6":
        //fallsthrough
      case 54:
        //fallsthrough
      case 102:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "6"){
            this.numberButtonInput(button)
          }
        })
      break
      case "7":
        //fallsthrough
      case 55:
        //fallsthrough
      case 103:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "7"){
            this.numberButtonInput(button)
          }
        })
      break
      case "8":
        //fallsthrough
      case 56:
        //fallsthrough
      case 104:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "8"){
            this.numberButtonInput(button)
          }
        })
      break
      case "9":
        //fallsthrough
      case 57:
        //fallsthrough
      case 105:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "9"){
            this.numberButtonInput(button)
          }
        })
      break
      case "x":
        //fallsthrough
      case 106:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "x"){
            this.applyModifier(button.textContent)
            this.setState({screenText: 0})
          }
        })
      break
      case "+":
        //fallsthrough
      case 107:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "+"){
            this.applyModifier(button.textContent)
            this.setState({screenText: 0})
          }
        })
      break
      case "-":
        //fallsthrough
      case 109:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "-"){
            this.applyModifier(button.textContent)
            this.setState({screenText: 0})
          }
        })
      break
      case ".":
        //fallsthrough
      case 110:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "."){
            this.applyModifier(button.textContent)
            this.setState({screenText: 0})
          }
        })
      break
      case "/":
        //fallsthrough
      case 111:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "/"){
            this.applyModifier(button.textContent)
            this.setState({screenText: 0})
          }
        })
      break
      case "DEL":
        //fallsthrough
      case 8:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "DEL"){
            let screenText = String(this.state.screenText) // convert screenText to a string for easy manipulation
            screenText = screenText.slice(0,-1) // remove last character then convert back to string before assigning to screenText
            if(screenText.length <= 0){
              this.setState({screenText:0})
            } else {
              this.setState({screenText:parseFloat(screenText)})
            }
          }})
      break
      case "RESET":
        //fallsthrough
      case 27:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "RESET"){
            this.setState({ screenText: 0, storedValue: 0, activeModifier:"+" })
          }
        })
      break
      case "=":
        //fallsthrough
      case 13:
        buttonsArray.forEach((button) =>{
          if(button.textContent === "="){
            let newValue = this.state.screenText
            const total = this.applyModifier(this.state.activeModifier)
            this.setState({activeModifier:"=", storedValue:newValue})
            this.setState({
              screenText:total,
            })
          }
        })
      break
    }
    return key
  }

  numberButtonInput = (btn) =>{
    let screenText = this.state.screenText
    if(this.state.activeModifier === "="){
      this.setState({screenText: 0, storedValue:0, activeModifier:"+"}) //if the use has pressed = button, reset everything to zero
      screenText = 0
    }
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
  }

  applyModifier = (modifier) =>{
    const storedValue = parseFloat(this.state.storedValue, 10)
    const screenText = parseFloat(this.state.screenText, 10)
    let newValue = storedValue
    switch(this.state.activeModifier){
      default:
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
        newValue = this.state.screenText
        break
      }
      this.setState({activeModifier:modifier, storedValue:newValue})
    return newValue
  }

  render(){
    console.log(document.getElementsByClassName("btnStyle"))
    let themeClassName = "AppContainer " + this.state.theme[this.state.activeTheme];
    return (
      <div className={themeClassName}>
        <div className="App">
          <Header activeTheme={this.state.theme[this.state.activeTheme]} screenText={this.state.screenText}/>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
