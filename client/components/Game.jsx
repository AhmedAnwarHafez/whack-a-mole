import React, { useEffect, useState } from 'react'

const sideLength = 5
const max = 4
const min = 0
const rnd = () => Math.floor((Math.random() * (max - min + 1)), 10) + min

function Game(props) {
  const [rowMole, setRowMole] = useState(rnd())
  const [colMole, setColMole] = useState(rnd())

  function handleClick(row, col) {
    if (rowMole === row && colMole === col) {
      setRowMole(rnd())
      setColMole(rnd())
      props.setStats(s => [...s, 1])
    }
  }

  useEffect(() => {
    const moleInterval = setInterval(() => {
      setRowMole(rnd())
      setColMole(rnd())
    }, 1000)

    return () => {
      clearInterval(moleInterval)
    }
  }, [props.stats])

  return (
    <table>
      <tbody>
        {Array.from(Array(sideLength), (_, row) =>
          <tr key={row}>
            {Array.from(Array(sideLength), (_, col) =>
              <td key={row + col} onClick={() => handleClick(row, col)}>
                {rowMole === row &&
                  colMole === col &&
                  <img className='mole' src='/mole.png' />}
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Game
