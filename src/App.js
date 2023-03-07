import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
const [playerOne, setPlayerOne] = useState(true)

  const playerTurn = (index) => {
  let updatedSquares = [...squares]
  if (playerOne){
    updatedSquares[index] = "❌"
    setSquares(updatedSquares)
  } else 
    updatedSquares[index] = "⭕️"
    setSquares(updatedSquares)
    setPlayerOne(!playerOne)
}

  return (

    <>
      <h1>Tic Tac Toe</h1>
      <div className= "gameBoard">
      {squares.map((value, index) =>{
        return(
          <Square 
          value={value}
          key={index}
          index={index}
          playerTurn={playerTurn}
          // handleGamePlay={handleGamePlay}          
        />                                   
        )
})}
      </div>
    </>
    )  
  } 


export default App