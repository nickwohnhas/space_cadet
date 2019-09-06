import React, { useState, useEffect} from 'react'
import Modal from 'react-modal'
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
      <Modal className='Modal' overlayClassName='Overlay' isOpen={showModal}>
        <div className="game-over-text">
          <h1>Game Over</h1>
          <h2>Your score: {score}</h2>
          <h3>Press Enter to play again</h3>
        </div>
      </Modal>
    </div>
  )
}

export default GameOver
