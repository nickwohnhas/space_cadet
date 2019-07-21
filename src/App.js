import React, {useState, useEffect} from 'react'
import SpaceShip from './components/SpaceShip'
import Meteor from './components/Meteor'
import '../src/styles/App.css'

const App = () => {

  const [position, setPosition] = useState(50)
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
  const [meteors, setMeteors] = useState([<Meteor meteorPosition={1600} spaceShipPosition={position} top={Math.floor(Math.random() * 450)} />])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    const interval = setInterval(() => {
      let newIntervals = meteors.map((meteor) => ({ meteorPosition: meteor.props.meteorPosition - 60, top: meteor.props.top }))
      newIntervals.push({ meteorPosition: 1400, spaceShipPosition: position, top: Math.floor(Math.random() * 800) })

      let newMeteors = newIntervals.map(({ meteorPosition, top }) => <Meteor meteorPosition={meteorPosition} spaceShipPosition={position} top={top} />)
      setMeteors(newMeteors)

    }, 250)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval)
    }
  }, [meteors])

    return (
      <div className="App">
        <SpaceShip handleKeyDown={handleKeyDown} position={position}  />
          { meteors.map((meteor) => (meteor)) }
      </div>
    )
  }

export default App
