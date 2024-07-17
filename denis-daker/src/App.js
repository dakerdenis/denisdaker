import React from 'react';
import "./App.css";
import Header from './components/Header'; 
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          {/**header***/}
         <Header /> 

        {/**SCREEN WITH SOCIALS NAME and DESCription***/}
          <Hero />





        </div>
      </div>
    </div>
  );
}

export default App;
