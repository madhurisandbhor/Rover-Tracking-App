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
  const totalItems = Array(gridLength).fill()
  const [input, setInput] = useState('')
  const [roverXPosition, setRoverXPosition] = useState(x)
  const [roverYPosition, setRoverYPosition] = useState(y)
  const [roverDirection, setRoverDirection] = useState(d)
  const [transformProp, setTransformProp] = useState()

  useEffect(() => {
    const result = testGrid(input)
    setRoverXPosition(result[0]) // X-position
    setRoverYPosition(result[1]) // y-position
    setRoverDirection(result[2]) // direction

    if (roverDirection === 'N') setTransformProp('rotate(0deg)')
    else if (roverDirection === 'E') setTransformProp('rotate(90deg)')
    else if (roverDirection === 'S') setTransformProp('rotate(180deg)')
    else if (roverDirection === 'W') setTransformProp('rotate(-90deg)')
  }, [input, roverDirection])

  return (
    <div>
      <div style={wrapper}>
        {totalItems.map((item, index) => (
          <div key={index} style={itemStyle}>
            {roverXPosition * 10 + roverYPosition === index && (
              <div style={roverImg}>
                <img
                  style={{ width: '100%', transform: transformProp }}
                  src={roverIcon}
                  alt="rover"
                />
              </div>
            )}
            <span style={itemSpan}>
              {Math.floor(index / 10)},{index % 10}
            </span>
          </div>
        ))}
      </div>
      <input
        name="inputString"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div>
        <div>X co-ordinate: {roverXPosition}</div>
        <div>Y co-ordinate: {roverYPosition}</div>
        <div> Direction: {roverDirection}</div>
      </div>
    </div>
  )
}

export default Grid
