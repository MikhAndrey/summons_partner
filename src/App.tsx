import React from 'react';
import './App.css';
import Main from "./Main";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Header from "./Header";
import CommonInfo from "./CommonInfo";

function App() {
  return (
    <div className="App">
        <div className="App-main-back"></div>
        <Header></Header>
        <div className="App-container">
            <Main></Main>
            <HowItWorks></HowItWorks>
            <Features></Features>
            <CommonInfo></CommonInfo>
        </div>
    </div>
  );
}

export default App;
