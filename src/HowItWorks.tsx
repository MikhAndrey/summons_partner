import React from "react";
import HowItWorksItem, {HowItWorksItemProps} from "./HowItWorksItem";


function HowItWorks() {
    const howItWorksContent: HowItWorksItemProps[] = [
        {name: "NYS Penal Law", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {name: "NYPD Patrol Guide", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {name: "Most common TPO", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {name: "Department Phone Book", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "}
    ];
    
    return (
        <div id="howItWorks">
            <div className="App-howitworks-description-container">
                <div className="header-text color-dark-blue">All in one solution</div>
                <div className="description-text color-night-blue">With our app, you can access a comprehensive reference 
                    guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime  Calculator makes 
                    it easy to manage, print and track your overtime hours  with precision and accuracy. Designed 
                    specifically for NYPD officers.
                </div>
            </div>
            <div className="App-howitworks-items-container">
                {howItWorksContent.map(el => (
                    <HowItWorksItem name={el.name} description={el.description}></HowItWorksItem>
                ))}
            </div>
        </div>
    );
}

export default HowItWorks;
