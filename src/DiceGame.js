import React, { useState } from 'react'; // simply import useState if React 16.8

// styles
import './dice-game.css';

function DiceGame() {
  // initial state
  const [firstDieResult, setFirstDie] = useState(2);
  const [secondDieResult, setSecondDie] = useState(3);

  // dice image assets
  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  const rollDice = () => {
    setFirstDie(Math.floor(Math.random() * 6) + 1);
    setSecondDie(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="dicegame">
      <header className="dice-game-header">
        {/* Render the Dice */}
        <div>
          <img src={firstDieImage} className="dice-game-die" alt="Die one" />
          <img src={secondDieImage} className="dice-game-die" alt="Die two" />
        </div>
        <div className="dice-game-controls">
          Total: {firstDieResult + secondDieResult}
          <br />
          <button className="dice-game-btn" onClick={rollDice}>
            Roll the Dice!
          </button>
        </div>
      </header>
    </div>
  );
}

export default DiceGame;
