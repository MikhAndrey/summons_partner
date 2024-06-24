import React from 'react';
import './App.css';
import Main from "./Main";
import HowItWorks from "./HowItWorks";
import Features from "./Features";
import Header from "./Header";
import CommonInfo from "./CommonInfo";
import Reviews from "./Reviews";
import Footer from './Footer';
import Help from './Help';
import StartWork from './StartWork';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
        {/* <div className="App-main-back back-dark-blue"></div> */}
        {/* <Header></Header> */}
        <div className="App-container">
            {/* <Main></Main>
            <HowItWorks></HowItWorks>
            <Features></Features>
            <CommonInfo></CommonInfo> */}
            {/* <Reviews></Reviews> */}
            <Help/>
            <StartWork/>
            <Contacts/>
        </div>
        <Footer/> 
    </div>
  );
}

export default App;
