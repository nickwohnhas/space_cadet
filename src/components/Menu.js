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
    <div className="container">
      <h1 className="item">Greetings Cadet</h1>
      <h2 className="item">Press <span className="option">Enter</span> for new game</h2>
      {showControls ? (
      <div className="controls">
      <p>Move spaceship up: "d"</p>
      <p>Move spaceship down: "c"</p></div>
      ) : (
      <h2 className="item"> Press <span className="option">c</span> for controls</h2 >
      )}
    </div>
  )
}

export default Menu;
