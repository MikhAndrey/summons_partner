import React from "react";

export interface FeaturesProps {
    name: string,
    description: string,
    imageLink: string
}

function FeaturesItem(props: FeaturesProps) {
    return (
        <div className="App-features-item">
            <div className="App-features-calendar-wrapper">
                <img src="./calendar.png" className="App-features-calendar"/>
            </div>
            <div className="App-features-item-name">{props.name}</div>
            <div className="App-features-item-description">{props.description}</div>
            <div className="App-features-item-image-wrapper">
                <div className="App-features-item-mobile-screen-outer-container">
                    <div className="App-features-item-mobile-screen-inner-container">
                        <div className="App-mobile-screen-mask"></div>
                        <img className="App-mobile-screen-image" src={props.imageLink} alt="Mobile screen"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesItem;
