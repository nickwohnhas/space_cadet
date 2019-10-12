import React, {useEffect, useState} from 'react'

const Menu = () => {
  const [showControls, setShowControls] = useState(false)

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      window.location.href = "/game"
    } else if (e.keyCode == 67) {
      setShowControls(!showControls)
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
      <h1 className="game-over-header">Greetings Cadet</h1>
      <h2>Press <span className="enter">Enter</span> for new game</h2>
      {showControls ? <div className="controls"><p>Move spaceship up: "d"</p>
        <p>Move spaceship down: "c"</p></div> : <h2> Press <span className="enter">c</span> for controls</h2 > }
    </div>
  )
}

export default Menu;
