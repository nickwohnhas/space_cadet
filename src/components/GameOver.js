import React, {useEffect} from 'react'
import '../styles/GameOver.css'

const GameOver = ({startGame}) => {

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
      <h1>Game Over</h1>
      <a>Press enter to play again</a>
    </div>
  )
}

export default GameOver
