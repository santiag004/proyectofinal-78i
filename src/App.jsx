import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas/Rutas'
import WeatherContext from './context/WeatherContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherContext>
        <Rutas />
      </WeatherContext>
    </>
  )
}

export default App
