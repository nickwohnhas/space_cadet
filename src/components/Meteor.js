import React from 'react'
import '../styles/Meteor.css'

const Meteor = ({position, top}) => {

  const divStyle = {
    position: 'fixed',
    marginLeft: `${position}px`,
    top: `${top}px`
  };

  return (
  <span className="meteor" style={divStyle}>
    meteor
  </span>
  )
}

export default Meteor
