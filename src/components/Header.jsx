import React from 'react'

const header = {
  fontSize: '22px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1rem 0',
  color: '#C1440E',
}

const divider = {
  width: '80%',
  margin: 'auto',
  border: '0.1rem dashed grey',
}

function Header() {
  return (
    <>
      <header style={header}>Mars Rover Tracking App</header>
      <hr style={divider} />
    </>
  )
}

export default Header
