import React, {useState} from "react";
import {scrollToSection} from "./helpers";
import BurgerMenu from "./BurgerMenu";

function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    
    return (
        <div>
            {isBurgerMenuOpen && (
                <div className="App-header-overlay">
                    <div className="App-header-info-overlay">
                        <img className="App-header-logo" src="./summons_partner_logo.png"/>
                        <span className="App-header-name-label">SUMMONS PARTNER+</span>
                    </div>
                </div>)}
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
                        <a
                            onClick={(e) => scrollToSection(e, 'reviews')}
                            className="App-header-menu-item"
                        >Reviews</a>
                        <a
                            onClick={(e) => scrollToSection(e, 'help')}
                            className="App-header-menu-item"
                        >Help</a>
                        <a
                            onClick={(e) => scrollToSection(e, 'contacts')}
                            className="App-header-menu-item"
                        >Contacts</a>
                    </div>
                    <div>
                        <button className="App-header-menu-start-button back-orange">Get started free</button>
                    </div>
                    <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
