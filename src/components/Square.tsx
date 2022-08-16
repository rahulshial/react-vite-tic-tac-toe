import React from 'react'

interface Props {
  index: number,
  player: string,
  onClick(event: any): void 
}
const Square = ({index, player, onClick}: Props) => {
  const scale = player ? "scale-100" : "scale-0"
  const textColor = player === 'X' ? "text-yellow-200" : "text-fuchsia-300"
  const hoverStyle = "transition duration-500 hover:scale-105 transform"
  const mainStyle = "h-36 border-solid border-4 border-slate-200 font-display text-7xl flex justify-center items-center cursor-pointer"
  const newPlayer = `transform transition-all duration-150 ease-out ${scale} ${textColor}`

  return (
    <div 
      data-cell-index={index} 
      className={`${mainStyle} ${hoverStyle}`}
      {...{ onClick }}
    >
      <span
        data-cell-index={index}
        className={newPlayer}
      >
        {player}
      </span>
    </div>
  )
}

export default Square