import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas/Rutas'
import Navegador from './components/nav/Navegador'
import Footer from './components/footer/Footer'
import WeatherContext from './context/WeatherContext';

function App() {
  

  return (
    <>
      <WeatherContext>
        <Navegador/>
        <Rutas />
        <Footer/>
      </WeatherContext>
    </>
  )
}

export default App
