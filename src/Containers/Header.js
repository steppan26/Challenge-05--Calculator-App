import React from 'react'
import './Header.css'
import Theme from '../Components/Theme'
import Screen from '../Components/Screen'

const Header = ( {activeTheme} ) => {
    return(
        <div className="topSection">
            <div className="header">
                <h1 className="title">calc</h1>
                <Theme activeTheme={activeTheme} />
            </div>
            <Screen/>
        </div>
    );
}

export default Header;