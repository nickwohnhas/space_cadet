import React, {useEffect} from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
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
      <Container>
       <Jumbotron className = "jumbotron bg-dark text-white border-bottom border-secondary" >
          <h1>Game Over</h1>
          <h2>Press enter to play again</h2>
       </Jumbotron>
      </Container>
    </div>
  )
}

export default GameOver
