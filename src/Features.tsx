import React from "react";
import FeaturesItem, {FeaturesProps} from "./FeaturesItem";

function Features() {
    const featuresItemsContent: FeaturesProps[] = [
        {
            name: "RDO Calendar", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_rdo_calendar.png"
        },
        {
            name: "Overtime Calculator", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_overtime_calculator.png"
        },
        {
            name: "Overtime History", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_overtime_history.png"
        }
    ];
    
    return (
        <div id="features">
            <img className="App-features-city-image" src="./city_image_blue.png" alt="City image"/>
            <div className="App-features-mobile-screen-outer-container">
                <div className="App-features-mobile-screen-inner-container">
                    <div className="App-mobile-screen-mask"></div>
                    <img className="App-mobile-screen-image" src="./mobile_screen_features.png" alt="Mobile screen"/>
                </div>
            </div>
            <div className="App-features-label-wrapper">
                <div className="App-features-label">
                    <div className="App-icon-wrapper back-orange">
                        <img src="./home.png" className="App-icon"/>
                    </div>
                    <div className="header-text">Summonses</div>
                    <div className="description-text">
                        With our app, you can access a comprehensive reference
                        guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime
                    </div>
                </div>
                <div className="App-features-label-arrows">
                    <img className="App-features-label-arrow-left" src="./arrow.png" alt="Arrow left"/>
                    <img className="App-features-label-arrow-right" src="./arrow.png" alt="Arrow right"/>
                </div>
            </div>
            <div className="App-features-main-content back-light-blue">
                <div className="App-features-items-container">
                    {featuresItemsContent.map(el => (
                        <FeaturesItem name={el.name} description={el.description} imageLink={el.imageLink}></FeaturesItem>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
