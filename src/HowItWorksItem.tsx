export interface HowItWorksItemProps {
    name: string,
    description: string
}

function HowItWorksItem(props: HowItWorksItemProps) {
    return (
        <div className="App-howitworks-about-item">
            <div className="App-howitworks-calendar-wrapper">
                <img src="./calendar.png" className="App-howitworks-calendar"/>
            </div>
            <div className="App-howitworks-about-item-name">{props.name}</div>
            <div className="App-howitworks-about-item-description">{props.description}</div>
        </div>
    );
}

export default HowItWorksItem;
