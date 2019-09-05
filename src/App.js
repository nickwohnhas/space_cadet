import React, {useState, useLayoutEffect} from 'react'
import SpaceShip from './components/SpaceShip'
import Meteor from './components/Meteor'
import GameOver from './components/GameOver'
import '../src/styles/App.css'

const App = () => {
  const [position, setPosition] = useState(150)
  const [meteors, setMeteors] = useState([<Meteor meteorPosition={1630} spaceShipPosition={position} top={Math.floor(Math.random() * 800)} />])
  const [gameOver, setGameOver] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key == "d") {
      let newPosition = position
      newPosition -= 10
      setPosition(newPosition)
    } else if (e.key == "c") {
      let newPosition = position
      newPosition += 10
      setPosition(newPosition)
    }
  }

  const startGame = () => {
    setPosition(150)
    setMeteors([<Meteor meteorPosition={1630} spaceShipPosition={position} top={Math.floor(Math.random() * 800)} />])
    setGameOver(false)
  }

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    const animation = requestAnimationFrame(() => {
      // map positions
      let newIntervals = meteors.map((meteor) => ({ meteorPosition: meteor.props.meteorPosition - 10, top: meteor.props.top }))
      // add new position
      if (meteors[meteors.length - 1].props.meteorPosition < 1580) {
        newIntervals.push({
          meteorPosition: 1630,
          spaceShipPosition: position,
          top: Math.floor(Math.random() * 800)
        })
      }
      // remove positions that are off the screen
      let cleanedIntervals = newIntervals.filter((interval) => {
        return interval.meteorPosition > -80
      })
      // create array of new meteors based on positions
      let newMeteors = cleanedIntervals.map(({ meteorPosition, top }) => <Meteor meteorPosition={meteorPosition} spaceShipPosition={position} top={top} setGameOver={setGameOver} />)
      setMeteors(newMeteors)
    })
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animation)
    }
  })

    return (
      <div className="App">
        {gameOver && <GameOver startGame={startGame} /> }
        {!gameOver && <SpaceShip handleKeyDown={handleKeyDown} position={position} /> }
        {!gameOver && (meteors.map((meteor) => (meteor)))}
      </div>
    )
  }

export default App
