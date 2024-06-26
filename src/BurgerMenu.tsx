import {scrollToSection} from "./helpers";

interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const scrollAndCloseMenu = (event: any, sectionId: string) => {
        setIsOpen(false);
        setTimeout(() => {
            scrollToSection(event, sectionId);
        }, 0);
    }

    return (
        <div className="burger-menu">
            {!isOpen && (<button onClick={toggleMenu} className="burger-menu-button"></button>)}
            {isOpen && (<button onClick={toggleMenu} className="close-menu-button"></button>)}
            {isOpen && (
                <div className="burger-menu-items">
                    <a onClick={(e) => scrollAndCloseMenu(e, 'howItWorks')} className="burger-menu-item">How it works</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'features')} className="burger-menu-item">Features</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'reviews')} className="burger-menu-item">Reviews</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'help')} className="burger-menu-item">Help</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'contacts')} className="burger-menu-item">Contacts</a>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
