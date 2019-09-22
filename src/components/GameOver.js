import React, { useEffect } from 'react'
import '../styles/GameOver.css'

const GameOver = ({startGame, score}) => {

const handleKeyDown = (e) => {
  if (e.keyCode == 13) {
    startGame()
  }
}

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <div className="game-over">
      <h1 className="game-over-header">Game Over</h1>
      <h2>Your score: <span className="score">{score}</span></h2>
      <h2>Press <span className="enter">Enter</span> to play again</h2>
    </div>
  )
}

export default GameOver
