import {scrollToSection} from "./helpers";
import { motion } from 'framer-motion';

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

    const variants = {
        open: { opacity: 1, transition: { duration: 0.5 } },
        closed: { opacity: 0, transition: { duration: 0 } },
    }

    return (
        <div className="burger-menu">
            <motion.button 
                onClick={ toggleMenu } 
                animate={ isOpen ? "closed" : "open" } 
                className="burger-menu-button"
            ></motion.button>
            <motion.button 
                onClick={ toggleMenu } 
                animate={ isOpen ? "open" : "closed" }
                variants={variants} 
                className="close-menu-button"
            ></motion.button>
            {isOpen && (
                <motion.div
                    className="burger-menu-items"
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: "spring", stiffness: 100, damping: 13 }}
                >
                    <a onClick={(e) => scrollAndCloseMenu(e, 'howItWorks')} className="burger-menu-item">How it works</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'features')} className="burger-menu-item">Features</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'reviews')} className="burger-menu-item">Reviews</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'help')} className="burger-menu-item">Help</a>
                    <a onClick={(e) => scrollAndCloseMenu(e, 'contacts')} className="burger-menu-item">Contacts</a>
                </motion.div>
            )}
        </div>
    );
};

export default BurgerMenu;
