import React, { useState, useEffect } from 'react'
import { maxY, maxX } from './constants'
import testGrid from './testGrid'
import roverIcon from './svg/rover-icon.svg'

const wrapper = {
  width: '100%',
  margin: '10px auto',
  display: 'grid',
  gridTemplateColumns: `repeat(${maxY + 1}, 65px)`,
  gridTemplateRows: `repeat(${maxX + 1}, 65px)`,
  gridGap: '1px',
}

const itemStyle = {
  padding: '10px',
  backgroundColor: '#ccc',
}

const itemSpan = {
  fontSize: '8px',
}

const roverImg = {
  width: '30px',
  height: '30px',
  alignText: 'center',
}

const Grid = () => {
  const gridLength = (maxX + 1) * (maxY + 1)
  const arr = Array(gridLength).fill()
  const [input, setInput] = useState('')

  useEffect(() => {
    console.log(testGrid(input))
  }, [input])

  return (
    <div>
      <div style={wrapper}>
        {arr.map((item, index) => (
          <div key={index} style={itemStyle}>
            <div style={roverImg}>
              <img style={{ width: '100%' }} src={roverIcon} alt="rover" />
            </div>
            <span style={itemSpan}>
              {Math.round(index / 10)},{index % 10}
            </span>
          </div>
        ))}
      </div>
      <input
        name="inputString"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  )
}

export default Grid
