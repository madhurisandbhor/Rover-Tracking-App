import './App.css'
import Grid from './Grid'

const header = {
  fontSize: '22px',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1rem 0',
}

function App() {
  return (
    <div className="App">
      <header style={header}>Mars Rover Tracking App</header>
      <Grid />
    </div>
  )
}

export default App
