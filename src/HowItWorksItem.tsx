export interface HowItWorksItemProps {
    name: string,
    description: string
}

function HowItWorksItem(props: HowItWorksItemProps) {
    return (
        <div className="App-howitworks-about-item">
            <div className="App-icon-wrapper back-light-blue">
                <img src="./calendar.png" className="App-icon"/>
            </div>
            <div className="App-howitworks-about-item-name color-dark-blue">{props.name}</div>
            <div className="description-text color-night-blue">{props.description}</div>
        </div>
    );
}

export default HowItWorksItem;
