import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export interface HelpProps {
    id: number,
    header: string,
    details: string
}

function HelpItem(props: HelpProps) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const openCloseDetails = () => {
        setIsDetailsOpen(!isDetailsOpen);
    }

    return (
        <div className="App-help-item color-black">
            <div className="App-help-item-header">
                <div className="App-help-item-header-text">
                    { props.header }
                </div>
                <div>
                    <img onClick={ openCloseDetails }
                        className={ `App-help-item-button ${ !isDetailsOpen ? '' : 'close-button' }` }
                    />
                </div>
            </div>
            <AnimatePresence>
                { !isDetailsOpen ? null :
                <motion.div className="App-help-item-details"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0, transition: { type: 'spring', stiffness: 90, damping: 13 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                    { props.details }
                </motion.div>}
            </AnimatePresence>
        </div>  
    )
}

export default HelpItem;
