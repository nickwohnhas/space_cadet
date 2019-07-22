import React, {useState, useEffect} from 'react'
import SpaceShip from './components/SpaceShip'
import Meteor from './components/Meteor'
import GameOver from './components/GameOver'
import '../src/styles/App.css'

const App = () => {
  const [position, setPosition] = useState(50)
  const [meteors, setMeteors] = useState([])
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
    setMeteors([])
    setGameOver(false)
  }


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    const interval = setInterval(() => {
      let newIntervals = meteors.map((meteor) => ({ meteorPosition: meteor.props.meteorPosition - 50, top: meteor.props.top }))

      newIntervals.push({ meteorPosition: 1630, spaceShipPosition: position, top: Math.floor(Math.random() * 800) })

      let newMeteors = newIntervals.map(({ meteorPosition, top }) => <Meteor meteorPosition={meteorPosition} spaceShipPosition={position} top={top} setGameOver={setGameOver} />)
      setMeteors(newMeteors)
    }, 250)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval)
    }
  }, [meteors])

    return (
      <div className="App">
        {gameOver && <GameOver startGame={startGame} /> }
        {!gameOver && <SpaceShip handleKeyDown={handleKeyDown} position={position} /> }
        {!gameOver && (meteors.map((meteor) => (meteor)))}
      </div>
    )
  }

export default App
