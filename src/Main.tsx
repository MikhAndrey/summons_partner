import React from "react";

function Main() {
    return (
        <div className="App-main-wrapper">
            <div className="App-main-label">
                <div>
                    <div className="App-main-label-primary">
                        Get the ultimate <br/> all-in-one solution
                    </div>
                </div>
                <div className="main-label-description">
                    for police officers in New York State.
                </div>
            </div>
            <div className="App-main-content-container">
                <div className="App-main-city-image-outer-container">
                    <div className="App-main-city-image-inner-container">
                        <a target="_blank" href="https://apps.apple.com/app/summons-partner/id1329409724" className="App-main-app-download">
                            <div className="App-ref-link-label color-orange">Download the App</div>
                            <img className="App-ref-link-icon color-orange" src="./ref_link_icon.png" alt="Download app"/>
                        </a>
                    </div>
                    <img className="App-main-city-image" src="./city_image.png" alt="City image"/>
                    <img className="App-main-city-image-mobile" src="./city_image_mobile.png" alt="City image"/>
                </div>
                <div className="App-main-mobile-screen-outer-container">
                    <div className="App-main-mobile-screen-inner-container image-shadow">
                        <div className="App-mobile-screen-mask"></div>
                        <img className="App-mobile-screen-image" src="./mobile_screen_main.png" alt="Mobile screen"/>
                    </div>
                </div>
            </div>
            <div className="App-qr-code-image-container">
                <img className="App-qr-code-image" src="./qr_code.png" alt="QR code"/>
            </div>
        </div>
    );
}

export default Main;
