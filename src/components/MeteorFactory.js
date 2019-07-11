import React, { useState, useEffect } from 'react'
import Meteor from './Meteor'

const MeteorFactory = () => {

  const [meteors, setMeteors] = useState([<Meteor position={1400} top={Math.floor(Math.random() * 450)} />])

useEffect(() => {
  const interval = setInterval(() => {
    let newIntervals = meteors.map((meteor) => ({ position: meteor.props.position - 100, top: meteor.props.top } ))
    newIntervals.push({ position: 1400, top: Math.floor(Math.random() * 800)})

    let newMeteors = newIntervals.map(({position, top }) => <Meteor position={position} top={top} />)
      setMeteors(newMeteors)
      console.log(newMeteors)
  }, 500)
  return () => {clearInterval(interval)}
})

  return meteors.map((meteor) => (meteor))
}

export default MeteorFactory
