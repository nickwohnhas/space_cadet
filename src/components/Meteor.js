import React, {useEffect} from 'react'
import '../styles/Meteor.css'

const Meteor = ({meteorPosition, top, spaceShipPosition, setGameOver }) => {

  const divStyle = {
    position: 'fixed',
    marginLeft: `${meteorPosition}px`,
    top: `${top}px`
  };

useEffect(() => {
  if (meteorPosition == 80) {
    if ((spaceShipPosition <= top && spaceShipPosition >= top - 25) || (spaceShipPosition >= top && spaceShipPosition - 25 <= top )) {
      setGameOver(true)
    }
  }
})
  return (
  <span className="meteor" style={divStyle}>
    meteor
  </span>
  )
}

export default Meteor
