import React from "react";

function CommonInfo() {
    return (
        <div className="App-common-info-container-wrapper">
            <div className="App-common-info-container">
                <div>
                    <div className="App-common-info-header">Get the ultimate</div>
                    <div className="App-common-info-header">all-in-one solution</div>
                </div>
                <div className="App-common-info-description">
                    With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. 
                    Additionally, our advanced Overtime  Calculator makes it easy to manage, print and track your 
                    overtime hours  with precision and accuracy. Designed specifically for NYPD officers.
                </div>
                <div className="App-common-info-statistics-container">
                    <div className="App-common-info-statistics-item">
                        <div className="App-common-info-statistics-value">130K+</div>
                        <div className="App-common-info-statistics-description">Downloads</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="App-common-info-statistics-value">1.2K+</div>
                        <div className="App-common-info-statistics-description">Positive feedback</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="App-common-info-statistics-value">4.9</div>
                        <div className="App-common-info-statistics-description">Stars rating</div>
                    </div>
                    <div className="App-common-info-statistics-item">
                        <div className="App-common-info-statistics-value">10+</div>
                        <div className="App-common-info-statistics-description">Years on market</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommonInfo;
