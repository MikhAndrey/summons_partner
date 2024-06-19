import React from 'react';
import './App.css';
import Main from "./Main";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Header from "./Header";

function App() {
  return (
    <div className="App">
        <div className="App-main-back"></div>
        <Header></Header>
        <div className="App-container">
            <Main></Main>
            <HowItWorks></HowItWorks>
            <Features></Features>
        </div>
    </div>
  );
}

export default App;
