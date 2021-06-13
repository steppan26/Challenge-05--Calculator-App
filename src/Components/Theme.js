import React from 'react'
import './Theme.css'

const Theme = ({activeTheme}) => {
    return(
        <div className="themeWrapper">
            <h3>THEME</h3>
            <div className="toggleWrapper" id="toggleWrapper">
                <h6>1</h6>
                <h6>2</h6>
                <h6>3</h6>
                <div className="themeToggle" id="themeSelector">
                    <div className="themeSelector" style={{gridArea:activeTheme}}></div>
                </div>
            </div>
        </div>
    );
}

export default Theme;