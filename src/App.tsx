import React, { useState, useEffect } from 'react'
import Scores from '@components/Scores';
import Square from './components/Square';
import { INITIAL_GAME_STATE, WINNING_COMBOS, INITIAL_SCORES } from './constants/constants';

function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState(INITIAL_SCORES);

  useEffect(() => {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }
    checkForWinner()
  }, [gameState])
  
  const resetBoard = () => {
    setGameState(INITIAL_GAME_STATE)
  }
  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);
    setScores(prev => {
      return {...prev, [currentPlayer]: prev[currentPlayer] + 1}
    })
    resetBoard()
    changePlayer();
  }
  
  const handleDraw = () => {
    window.alert('The game ended in a draw')
    resetBoard()
    changePlayer();
  }

  const checkForWinner = () => {
    let roundWon = false;
    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      let a = gameState[WINNING_COMBOS[i][0]]
      let b = gameState[WINNING_COMBOS[i][1]]
      let c = gameState[WINNING_COMBOS[i][2]]
      
      if([a, b, c].includes("")) continue;

      if(a === b && b === c) {
        roundWon = true
        break
      }
    }

    if(roundWon) {
      setTimeout(() => handleWin(), 500)
      return
    }
    
    if(!gameState.includes("")) {
      setTimeout(() => handleDraw(), 500)
      return
    }
    changePlayer();
  }

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
  }
  const handleCellClick = (event: any) => {
    const cellIndex = Number(event.target.getAttribute('data-cell-index'))
    if(!gameState[cellIndex]) {
      const newValues = [...gameState]
      newValues.splice(cellIndex, 1, currentPlayer)
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
      <Scores currentPlayer={currentPlayer} scores={scores} />
    </div>
  )
}

export default App
