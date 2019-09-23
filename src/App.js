import React, { useState } from 'react';

import './App.css';

/// Hey Look! -- an SFC component that holds state via useState hook
const App = () => {
  // getters and setters for storing state with use state
  //
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  // Dice Image .png
  const firstDieImage = require('./assets/1.png');
  const secondDieImage = require('./assets/2.png');

  /*
   * Roll the Dice *
   */
  const rollDice = () => {
    // use Math.random to roll the dice && store the result in state
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  };

  // The Secret: React Components just render out the current State
  return (
    <div className="App">
      <header className="App-header">
        {/* Render the Dice */}
        <div style={{ display: 'flex', margin: 20 }}>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        {/* Show the Dice results as Numbers */}
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>
          Roll
        </button>
      </header>
    </div>
  );
};

export default App;
