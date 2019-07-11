import React, { useState, useEffect } from 'react'
import '../styles/SpaceShip.css'

const SpaceShip = () => {

  const handleKeyDown = (e) => {
    if (e.key == "d") {
      let positionInt = parseInt(position)
      let newPosition = positionInt -= 10
      setPosition(`${newPosition}`)
    } else if (e.key == "c") {
      let positionInt = parseInt(position)
      let newPosition = positionInt += 10
      setPosition(`${newPosition}`)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

  const [position, setPosition] = useState('50')


  const divStyle = {
    top: `${position}px`
  };

  return (
    <span className="spaceship" style={divStyle} >
      spaceship
    </span>
  )
}

export default SpaceShip
