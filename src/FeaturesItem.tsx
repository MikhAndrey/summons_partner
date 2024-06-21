import React from "react";

export interface FeaturesProps {
    name: string,
    description: string,
    imageLink: string
}

function FeaturesItem(props: FeaturesProps) {
    return (
        <div className="App-features-item">
            <div className="App-features-item-main-info">
                <div className="App-icon-wrapper back-orange">
                    <img src="./calendar.png" className="App-icon"/>
                </div>
                <div className="App-features-item-name color-dark-blue">{props.name}</div>
                <div className="description-text color-night-blue">{props.description}</div>
            </div>
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
