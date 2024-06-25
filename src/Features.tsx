import React from "react";
import FeaturesItem, {FeaturesProps} from "./FeaturesItem";

function Features() {
    const featuresItemsContent: FeaturesProps[] = [
        {
            id: 1,
            name: "RDO Calendar", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_rdo_calendar.png"
        },
        {
            id: 2,
            name: "Overtime Calculator", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_overtime_calculator.png"
        },
        {
            id: 3,
            name: "Overtime History", 
            description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime ",
            imageLink: "./mobile_screen_overtime_history.png"
        }
    ];
    
    return (
        <div id="features">
            <div className="App-features-city-image-wrapper">
                <img className="App-features-city-image" src="./city_image_blue.png" alt="City image"/>
                <img className="App-features-city-image-mobile" src="./city_image_blue_mobile.png" alt="City image"/>
            </div>
            <div className="App-features-content-container">
                <div className="App-features-mobile-screen-outer-container">
                    <div className="App-features-mobile-screen-inner-container image-shadow">
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
                        <div className="description-text App-features-label-description">
                            With our app, you can access a comprehensive reference
                            guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime
                        </div>
                    </div>
                    <div className="App-features-label-arrows">
                        <img className="App-features-label-arrow-left" src="./arrow.png" alt="Arrow left"/>
                        <img className="App-features-label-arrow-right" src="./arrow.png" alt="Arrow right"/>
                    </div>
                </div>
            </div>
            <div className="App-features-main-content back-light-blue">
                <div className="App-features-items-container">
                    {featuresItemsContent.map(el => (
                        <FeaturesItem 
                            key={el.id} 
                            id={el.id} 
                            name={el.name} 
                            description={el.description} 
                            imageLink={el.imageLink}
                        ></FeaturesItem>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
