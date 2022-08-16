import React from 'react'

interface Props {
  currentPlayer: string,
  scores: {[key: string]: number};
}
const Scores = ({currentPlayer, scores}: Props) => {
  return (
    <div className="mx-auto w-96 text-2xl text-serif">
    <p className="text-white mt-5">
      Next Player: <span>{currentPlayer}</span>
    </p>
    <p className="text-white mt-5">
      Player X wins: <span>{scores["X"]}</span>
    </p>
    <p className="text-white mt-5">
      Player O wins: <span>{scores["O"]}</span>
    </p>
  </div>
  )
}

export default Scores