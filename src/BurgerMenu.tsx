import {scrollToSection} from "./helpers";
import {useState} from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <button onClick={toggleMenu} className="burger-menu-button"></button>
            {isOpen && (
                <div className="burger-menu-items">
                    <a onClick={(e) => scrollToSection(e, 'howItWorks')} className="burger-menu-item">How it works</a>
                    <a onClick={(e) => scrollToSection(e, 'features')} className="burger-menu-item">Features</a>
                    <a onClick={(e) => scrollToSection(e, 'reviews')} className="burger-menu-item">Reviews</a>
                    <a onClick={(e) => scrollToSection(e, 'help')} className="burger-menu-item">Help</a>
                    <a onClick={(e) => scrollToSection(e, 'contacts')} className="burger-menu-item">Contacts</a>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
