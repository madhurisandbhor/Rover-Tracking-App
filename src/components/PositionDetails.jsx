import React, { memo } from 'react'

const position = { fontSize: '1.6rem', marginTop: '2rem' }

const value = {
  color: '#C1440E',
  fontSize: '1.8rem',
}

const PositionDetails = ({
  roverPositionX,
  roverPositionY,
  roverDirection,
}) => {
  return (
    <div style={position}>
      <div>
        X co-ordinate: <span style={value}>{roverPositionX}</span>
      </div>
      <div>
        Y co-ordinate: <span style={value}>{roverPositionY}</span>
      </div>
      <div>
        Direction: <span style={value}>{roverDirection}</span>
      </div>
    </div>
  )
}

export default memo(PositionDetails)
