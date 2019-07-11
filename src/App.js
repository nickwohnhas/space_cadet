import React from 'react'
import SpaceShip from './components/SpaceShip'
import MeteorFactory from './components/MeteorFactory'
import '../src/styles/App.css'

const App = () => {
    return (
      <div className="App">
        <SpaceShip />
        <MeteorFactory />
      </div>
    )
  }

export default App
