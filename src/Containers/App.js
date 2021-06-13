
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
     }

   }

   componentDidMount(){
    this.createThemeEventListener();
    this.setHeadingFontColor();
   }

   createThemeEventListener = () => {
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


  render(){
    let themeClassName = "App " + this.state.theme[this.state.activeTheme];
    return (
      <div className="AppContainer">
        <div className={themeClassName}>
          <Header activeTheme={this.state.theme[this.state.activeTheme]}/>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
