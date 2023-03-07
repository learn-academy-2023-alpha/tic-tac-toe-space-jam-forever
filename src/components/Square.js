import React from 'react'

const Square = ({value, index, playerTurn}) => {
  const handleClick = () => {
    playerTurn(index)
  }
  return (
    <div className="square" onClick={handleClick}>
      {value}
    </div>
  )
}
export default Square
