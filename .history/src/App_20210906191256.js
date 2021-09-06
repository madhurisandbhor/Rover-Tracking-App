import './App.css'
import Grid from './Grid'

const header = {
  fontSize: '16px',
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
