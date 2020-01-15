import React, { useState } from 'react'; // simply import useState if React 16.8

import './App.css';

/// Hey Look! -- an SFC component that holds state via useState hook
const App = () => {
  // getters and setters for storing state with use state
  // recall you typically pass in the state prop and a method to update it
  const [firstDieResult, setFirstDie] = useState(2); // initialState
  const [secondDieResult, setSecondDie] = useState(3);

  // dice.png -- set dynamically w/template literal to see the dice change
  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  /*
   * Roll the Dice *
   */
  const rollDice = () => {
    // use Math.random to roll the dice
    // && store the result in local state
    setFirstDie(Math.floor(Math.random() * 6) + 1);
    setSecondDie(Math.floor(Math.random() * 6) + 1);
    // update the images with setDieImages -- use `` for interpolate
  };

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
