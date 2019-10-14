import React, {useEffect} from 'react'
import '../styles/Meteor.css'

const Meteor = ({meteorPosition, top, spaceShipPosition, setGameOver }) => {

  const divStyle = {
    marginLeft: `${meteorPosition}px`,
    top: `${top}px`
  };

useEffect(() => {
  if (meteorPosition == 80) {
    if ((spaceShipPosition <= top && spaceShipPosition >= top - 25) || (spaceShipPosition >= top && spaceShipPosition - 50 <= top )) {
      setGameOver(true)
    }
  }
})
  return (
  <div className="meteor" style={divStyle}>
  </div>
  )
}

export default Meteor
