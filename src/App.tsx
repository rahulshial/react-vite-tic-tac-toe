import React, { useState } from 'react'
import Square from '@components/Square';

function App() {
  const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">Tic Tac Toe</h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {INITIAL_GAME_STATE.map((player, index) => (
            <Square index={index} player={player}/>
          ))}
        </div>
      </div>
      <div>Score Goes Here</div>
    </div>
  )
}

export default App
