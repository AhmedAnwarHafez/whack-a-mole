import React, { useEffect, useState } from 'react'
import Game from './Game'
import Stats from './Stats'

function App() {
  const [inGame, setInGame] = useState(null)

  const [stats, setStats] = useState([])
  function handleStartGame() {
    setInGame(true)
  }


  useEffect(() => {

    const gameInterval = setInterval(() => {
      setInGame(false)
    }, 10 * 1000)

    return () => {
      clearInterval(gameInterval)
    }

  })

  function initialize() {
    switch (inGame) {
      case true:
        return <Game setStats={setStats} stats={stats} />
      case false:
        return <Stats stats={stats}/>
      default:
        return null;
    }
  }

  return (
    <div className='app'>
      <h1>Whack-a-Mole</h1>
      <button onClick={handleStartGame} disabled={inGame}>Start</button>
      {initialize()}
    </div>
  )
}

export default App
