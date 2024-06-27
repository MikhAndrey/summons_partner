import { useState } from "react";

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
                        src={ isDetailsOpen ? './substract_icon.png' : './plus_icon.png' } 
                        className={ `App-help-item-button ${ isDetailsOpen ? 'close-button' : '' }` }
                    />
                </div>
            </div>
            { !isDetailsOpen ? null :
            <div className="App-help-item-details">
                { props.details }
            </div>}
        </div>  
    )
}

export default HelpItem;
