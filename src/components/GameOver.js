import React, { useEffect } from 'react'
import '../styles/GameOver.css'

const GameOver = ({startGame, score}) => {

const handleKeyDown = (e) => {
  if (e.keyCode == 13) {
    startGame()
  } else if (e.keyCode == 32) {
    window.location.href = "/"
  }
}

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div className="container">
      <h1 className="item">Game Over</h1>
      <h2 className="item">Your score: <span className="score">{score}</span></h2>
      <h2 className="item">Press <span className="option">Enter</span> to play again</h2>
      <h2 className="item">Press <span className="option">SpaceBar</span> to return to menu</h2>
    </div>
  )
}

export default GameOver
