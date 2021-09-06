import React, { useState, useEffect } from 'react'
import { maxY, maxX, x, y, d } from './constants'
import testGrid from './testGrid'
import roverIcon from './svg/rover-icon.svg'

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

const itemSpan = {
  fontSize: '8px',
}

const roverImg = {
  width: '20px',
  height: '20px',
  alignText: 'center',
}

const Grid = () => {
  const gridLength = (maxX + 1) * (maxY + 1)
  const arr = Array(gridLength).fill()
  const [input, setInput] = useState('')
  const [roverXPosition, setRoverXPosition] = useState(0)
  const [roverYPosition, setRoverYPosition] = useState(0)
  const [roverDirection, setRoverDirection] = useState('N')

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
