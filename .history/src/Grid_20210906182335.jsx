import React, { useState } from 'react'
import { maxY, maxX } from './constants'

const wrapper = {
  width: '100%',
  margin: '10px auto',
  display: 'grid',
  gridTemplateColumns: `repeat(${maxY + 1}, 50px)`,
  gridTemplateRows: `repeat(${maxX + 1}, 50px)`,
  gridGap: '1px',
}

const itemStyle = {
  padding: '10px',
  backgroundColor: '#ccc',
}

const Grid = () => {
  const gridLength = (maxX + 1) * (maxY + 1)
  const arr = Array(gridLength).fill()
  const [input, setInput] = useState('')

  return (
    <>
      <div style={wrapper}>
        {arr.map((item, index) => (
          <div key={index} style={itemStyle}>
            {Math.round(index / 10)},{index % 10}
          </div>
        ))}
      </div>
      <input
        name="inputString"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  )
}

export default Grid
