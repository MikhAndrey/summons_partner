export interface AboutItemProps {
    name: string,
    description: string
}

function AboutItem(props: AboutItemProps) {
    return (
        <div className="App-howitworks-about-item">
            <img src="./calendar.png" className="App-howitworks-about-item-image"/>
            <div className="App-howitworks-about-item-name">{props.name}</div>
            <div className="App-howitworks-about-item-description">{props.description}</div>
        </div>
    );
}

export default AboutItem;
