import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas/Rutas'
import Navegador from './components/nav/Navegador'
import WeatherContext from './context/WeatherContext';

function App() {
  

  return (
    <>
      <WeatherContext>
        <Navegador/>
        <Rutas />
      </WeatherContext>
    </>
  )
}

export default App
