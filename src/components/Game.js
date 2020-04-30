import React, { useState, useLayoutEffect } from 'react';
import SpaceShip from './SpaceShip';
import Meteor from './Meteor';
import GameOver from './GameOver';

const Game = () => {
  const [position, setPosition] = useState(150);
  const [meteors, setMeteors] = useState([
    <Meteor
      meteorPosition={1630}
      spaceShipPosition={position}
      top={Math.floor(Math.random() * window.innerHeight)}
    />
  ]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleKeyDown = e => {
    requestAnimationFrame(() => {
      if (e.key === 'd' && position > 0) {
        let newPosition = position;
        setPosition(newPosition -= 10);
      } else if (e.key === 'c' && position < window.innerHeight - 30) {
        let newPosition = position;
        setPosition(newPosition += 10);
      }
    });
  };

  const startGame = () => {
    setPosition(150);
    setMeteors([
      <Meteor
        meteorPosition={1630}
        spaceShipPosition={position}
        top={Math.floor(Math.random() * 800)}
      />
    ]);
    setScore(0);
    setGameOver(false);
  };

  const increaseScore = () => {
    if (!gameOver) {
      setScore(score + 10);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    const animation = requestAnimationFrame(() => {
      // map positions
      const newIntervals = meteors.map(meteor => ({
        meteorPosition: meteor.props.meteorPosition - 10,
        top: meteor.props.top
      }));
      // add new position
      if (meteors[meteors.length - 1].props.meteorPosition < 1580) {
        newIntervals.push({
          meteorPosition: 1630,
          spaceShipPosition: position,
          top: Math.floor(Math.random() * 800)
        });
      }
      // remove positions that are off the screen
      let cleanedIntervals = newIntervals.filter(interval => {
        return interval.meteorPosition > -80;
      });
      // create array of new meteors based on positions
      let newMeteors = cleanedIntervals.map(({ meteorPosition, top }) => (
        <Meteor
          meteorPosition={meteorPosition}
          spaceShipPosition={position}
          top={top}
          setGameOver={setGameOver}
        />
      ));
      setMeteors(newMeteors);
      increaseScore();
    });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animation);
    };
  });

  return (
    <div className='App'>
      {gameOver && <GameOver startGame={startGame} score={score} />}
      {!gameOver && (
        <SpaceShip handleKeyDown={handleKeyDown} position={position} />
      )}
      {!gameOver && meteors.map(meteor => meteor)}
    </div>
  );
};

export default Game;
