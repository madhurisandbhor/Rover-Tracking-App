import React, { memo } from 'react'
import roverIcon from 'svg/rover-icon.svg'
import { maxX, maxY } from 'utils/constants'

const grid = {
  width: '50%',
  margin: '1rem',
  display: 'grid',
  gridTemplateColumns: `repeat(${maxY + 1}, 5rem)`,
  gridTemplateRows: `repeat(${maxX + 1}, 5rem)`,
  gridGap: '0.1rem',
}

const cell = {
  padding: '1rem',
  backgroundColor: '#ccc',
  display: 'flex',
  justifyContent: 'flex-end',
}

const cellPos = {
  fontSize: '1rem',
  alignSelf: 'flex-end',
}

const roverImg = {
  width: '2rem',
  height: '2rem',
  alignText: 'center',
}

const Grid = ({ cells, transformProp, roverPositionX, roverPositionY }) => {
  return (
    <div style={grid}>
      {cells.map((item, index) => (
        <div key={index} style={cell}>
          {roverPositionX * 10 + roverPositionY === index && (
            <div style={roverImg}>
              <img
                style={{ width: '100%', transform: transformProp }}
                src={roverIcon}
                alt="rover"
              />
            </div>
          )}
          <p style={cellPos}>
            {Math.floor(index / 10)},{index % 10}
          </p>
        </div>
      ))}
    </div>
  )
}

export default memo(Grid)
