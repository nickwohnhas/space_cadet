import React, { useState, useEffect} from 'react'
import '../styles/GameOver.css'

const GameOver = ({startGame, score}) => {

const [showModal, setShowModal] = useState(true)

const handleKeyDown = (e) => {
  if (e.keyCode == 13) {
    setShowModal(false)
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
      <h1 class="game-over-header">Game Over</h1>
      <h2>Your score: <span class="score">{score}</span></h2>
      <h2>Press <span class="enter">Enter</span> to play again</h2>
    </div>
  )
}

export default GameOver
