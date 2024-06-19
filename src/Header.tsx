import React from "react";
import {scrollToSection} from "./helpers";

function Header() {
    return (
        <div className="App-header">
            <div className="App-header-info">
                <img className="App-header-logo" src="./summons_partner_logo.png"/>
                <span className="App-header-name-label">SUMMONS PARTNER+</span>
            </div>
            <div className="App-header-menu">
                <div className="App-header-menu-items">
                    <a 
                        onClick={(e) => scrollToSection(e, 'howItWorks')} 
                        className="App-header-menu-item"
                    >How it works</a>
                    <a
                        onClick={(e) => scrollToSection(e, 'features')}
                        className="App-header-menu-item"
                    >Features</a>
                    <a href="#" className="App-header-menu-item">Reviews</a>
                    <a href="#" className="App-header-menu-item">Help</a>
                    <a href="#" className="App-header-menu-item">Contacts</a>
                </div>
                <div>
                    <button className="App-header-menu-start-button">Get started free</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
