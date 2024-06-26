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
                <div>
                    { props.header }
                </div>
                <div>
                    <button onClick={ openCloseDetails }
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