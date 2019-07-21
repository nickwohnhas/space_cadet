import React from 'react'
import '../styles/SpaceShip.css'

const SpaceShip = ({position}) => {
  const divStyle = {
    top: `${position}px`
  };

  return (
    <span className="spaceship" style={divStyle} >
      meteor
    </span>
  )
}

export default SpaceShip
