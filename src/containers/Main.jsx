import React, { useState, useEffect } from 'react'
import testGrid from 'utils/testGrid'
import PositionDetails from 'components/PositionDetails'
import Grid from 'components/Grid'
import {
  defaultDir,
  x,
  y,
  maxX,
  maxY,
} from 'utils/constants'

const wrapper = {
  width: '80%',
  margin: '1rem auto',
  display: 'flex',
  alignItems: 'center',
}

const inputDetails = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const label = {
  fontSize: '1.6rem',
  margin: '1rem 0',
}

const note = {
  fontSize: '1.2rem',
  margin: '1rem 0',
}

const Main = () => {
  const gridLength = (maxX + 1) * (maxY + 1)
  const totalItems = Array(gridLength).fill()
  const [input, setInput] = useState('')
  const [roverPositionX, setroverPositionX] = useState(x)
  const [roverPositionY, setroverPositionY] = useState(y)
  const [roverDirection, setRoverDirection] = useState(defaultDir)
  const [transformProp, setTransformProp] = useState()

  useEffect(() => {
    const result = testGrid(input)
    setroverPositionX(result[0]) // X-position
    setroverPositionY(result[1]) // y-position
    setRoverDirection(result[2]) // direction

    if (roverDirection === 'N') setTransformProp('rotate(0deg)')
    else if (roverDirection === 'E') setTransformProp('rotate(90deg)')
    else if (roverDirection === 'S') setTransformProp('rotate(180deg)')
    else if (roverDirection === 'W') setTransformProp('rotate(-90deg)')
  }, [input, roverDirection])

  return (
    <div style={wrapper}>
      <div style={inputDetails}>
        <p style={label}>Please enter the input string to move the Rover</p>
        <input
          name="inputString"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="example: rffrflf"
          pattern="[rlf]"
        />
        <p style={note}>(valid characters: 'r'-Right, 'l'-left, 'f'-forward)</p>
        <PositionDetails
          roverPositionX={roverPositionX}
          roverPositionY={roverPositionY}
          roverDirection={roverDirection}
        />
      </div>
      <Grid
        cells={totalItems}
        transformProp={transformProp}
        roverPositionX={roverPositionX}
        roverPositionY={roverPositionY}
      />
    </div>
  )
}

export default Main
