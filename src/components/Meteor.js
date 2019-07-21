import React, {useEffect} from 'react'
import '../styles/Meteor.css'

const Meteor = ({meteorPosition, top, spaceShipPosition}) => {

  const divStyle = {
    position: 'fixed',
    marginLeft: `${meteorPosition}px`,
    top: `${top}px`
  };

useEffect(() => {
  if (meteorPosition <= 50) {
    if (top == spaceShipPosition) {
      console.log("DIRECT HIT!!!!!")
      //can't do direct comparison.  Need range here.
      //also need to remove the meteors if they are not direct hits after they've gone off of screen.
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
