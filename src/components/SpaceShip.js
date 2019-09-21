import React from 'react'
import '../styles/SpaceShip.css'

const SpaceShip = ({position}) => {
  const divStyle = {
    top: `${position}px`
  };

  return (
    <div className="spaceship" style={divStyle} >
    </div>
  )
}

export default SpaceShip
