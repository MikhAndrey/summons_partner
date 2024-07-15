import React from "react";
import HowItWorksItem, {HowItWorksItemProps} from "./HowItWorksItem";
import { motion } from "framer-motion";

function HowItWorks() {
    const howItWorksContent: HowItWorksItemProps[] = [
        {id: 1, name: "NYS Penal Law", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {id: 2, name: "NYPD Patrol Guide", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {id: 3, name: "Most common TPO", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "},
        {id: 4, name: "Department Phone Book", description: "With our app, you can access a comprehensive reference guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime "}
    ];
    
    return (
        <div id="howItWorks">
            <div className="App-howitworks-description-container">
                <motion.div className="App-howitworks-description-header no-wrap header-text color-dark-blue"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                >
                    All-in-one <br/> solution
                </motion.div>
                <div className="App-howitworks-description-text description-text color-night-blue">With our app, you can access a comprehensive reference 
                    guide to THE JOB,  summonses and NYS Penal Law. Additionally, our advanced Overtime  Calculator makes 
                    it easy to manage, print and track your overtime hours  with precision and accuracy. Designed 
                    specifically for NYPD officers.
                </div>
            </div>
            <div className="App-howitworks-items-container">
                {howItWorksContent.map(el => (
                    <HowItWorksItem key={el.id} id={el.id} name={el.name} description={el.description}></HowItWorksItem>
                ))}
            </div>
        </div>
    );
}

export default HowItWorks;
