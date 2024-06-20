import React from "react";

function Main() {
    return (
        <div className="App-main-wrapper">
            <div className="App-main-label">
                <div>
                    <div className="App-main-label-primary">
                        Get the ultimate
                    </div>
                    <div className="App-main-label-primary">
                        all-in-one solution
                    </div>
                </div>
                <div className="main-label-description">
                    for police officers in New York State.
                </div>
            </div>
            <div className="App-main-mobile-screen-outer-container">
                <div className="App-main-mobile-screen-inner-container">
                    <div className="App-mobile-screen-mask"></div>
                    <img className="App-mobile-screen-image" src="./mobile_screen_main.png" alt="Mobile screen"/>
                </div>
            </div>
            <div className="App-main-city-image-outer-container">
                <div className="App-main-city-image-inner-container">
                    <div className="App-main-app-download">
                        <span className="App-ref-link-label color-orange">Download the App</span>
                        <img className="App-ref-link-icon color-orange" src="./ref_link_icon.png" alt="Download app"/>
                    </div>
                </div>
                <img className="App-main-city-image" src="./city_image.png" alt="City image"/>
            </div>
            <div className="App-qr-code-image-container">
                <img className="App-qr-code-image" src="./qr_code.png" alt="QR code"/>
            </div>
        </div>
    );
}

export default Main;
