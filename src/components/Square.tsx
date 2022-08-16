import React from 'react'

interface Props {
  index: number,
  player: string,
}
const Square = ({index, player}: Props) => {
  return (
    <div 
      key={index} 
      className="h-36 border-solid border-4 border-slate-200 font-display text-7xl justify-center items-center cursor-pointer">
      {player}
    </div>
  )
}

export default Square