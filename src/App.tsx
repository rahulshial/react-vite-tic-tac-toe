import React, { useState, useEffect } from 'react'
import Square from './components/Square';

function App() {
  const INITIAL_GAME_STATE = new Array(9).fill("");
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X")

  useEffect(() => {
  changePlayer()
  }, [gameState])
  
  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }
  const handleCellClick = (event: any) => {
    const cellIndex = Number(event.target.getAttribute('data-cell-index'))
    if(!gameState[cellIndex]) {
      const newValues = [...gameState]
      newValues[cellIndex] = currentPlayer
      setGameState(newValues)
    }
  }

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">Tic Tac Toe</h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState.map((player, index) => (
            <Square key={index} {...{index, player}} onClick={handleCellClick}/>
          ))}
        </div>
      </div>
      <div>Score Goes Here</div>
    </div>
  )
}

export default App
