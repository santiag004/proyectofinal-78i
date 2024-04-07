import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas/Rutas'
import Navegador from './components/nav/Navegador'
import Footer from './components/footer/Footer'
import WeatherContext from './context/WeatherContext';
import UsuariosContext from './context/UsuariosContext'

function App() {
  

  return (
    <>
    <UsuariosContext>
      <WeatherContext>
        <Navegador/>
        <Rutas />
        <Footer/>
      </WeatherContext>
    </UsuariosContext>
    </>
  )
}

export default App
