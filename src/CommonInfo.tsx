import React from "react";

function CommonInfo() {
    return (
        <div className="App-common-info-container-wrapper">
            <div className="App-common-info-container">
                <div>
                    <div className="header-text App-common-info-header color-dark-blue">Get the ultimate</div>
                    <div className="header-text App-common-info-header color-dark-blue">all-in-one solution</div>
                </div>
                <div className="description-text App-common-info-description color-night-blue">
                    With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. 
                    Additionally, our advanced Overtime  Calculator makes it easy to manage, print and track your 
                    overtime hours  with precision and accuracy. Designed specifically for NYPD officers.
                </div>
                <div className="App-common-info-statistics-container">
                    <div className="App-common-info-statistics-item">
                        <div className="header-text color-dark-blue">130K+</div>
                        <div className="description-text color-orange">Downloads</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="header-text color-dark-blue">1.2K+</div>
                        <div className="description-text color-orange">Positive feedback</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="header-text color-dark-blue">4.9</div>
                        <div className="Adescription-text color-orange">Stars rating</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="header-text color-dark-blue">10+</div>
                        <div className="description-text color-orange">Years on market</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommonInfo;
