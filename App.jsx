import { useState } from 'react'

const TURN = {
  X: '❌',
  O: '⚪'
}

const checkWinner = (arr) => {
  const winnerPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (const positions of winnerPositions) {
    const [a, b, c] = positions
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a]
    }
  }

  return null
}

export default function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.X)
  const [winner, setWinner] = useState(false)

  const handleReset = () => {
    setBoard(Array(9).fill(null))
  }

  const updateBoard = (index) => {
    if (board[index] | winner) return
    const newBoard = [...board]
    newBoard[index] = turn

    setBoard(newBoard)

    const newWinner = checkWinner(board)

    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
  }

  return (
    <>
      <h1>Tic tac toe App</h1>
      <button className="btn" onClick={handleReset}> Restart Game</button>
      <div className="gameContainer">
        {
          board.map((item, index) => {
            return (
              <div
                key={index}
                className='square'
                onClick={() => updateBoard(index)}
                >
                {item}
              </div>
            )
          })
        }
      </div>
      <h2>Turn goes to</h2>
      <div>whatever</div>

    </>
  )
}
