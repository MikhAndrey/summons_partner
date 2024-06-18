import Header from "./Header";
import React from "react";

function Main() {
    return (
        <div className="App-main">
            <Header></Header>
            <div className="App-main-label">
                <div>
                    <div className="App-main-label-primary">
                        Get the ultimate
                    </div>
                    <div className="App-main-label-primary">
                        all-in-one solution
                    </div>
                </div>
                <div className="App-main-label-secondary">
                    for police officers in New York State.
                </div>
            </div>
            <div className="App-main-mobile-screen-container">
                <img className="App-main-mobile-screen-image" src="./summons_mobile_screen.png" alt="Mobile screen"/>
            </div>
            <div className="App-main-city-image-outer-container">
                <div className="App-main-city-image-inner-container">
                    <div className="App-main-app-download">
                        <span className="App-main-app-download-label">Download the App</span>
                        <img className="App-main-app-download-icon" src="./app_download.png" alt="Download app"/>
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
