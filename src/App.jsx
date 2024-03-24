
import Navegador from './components/navegador/Navegador'
import Rutas from './components/rutas/Rutas'
import 'bootstrap/dist/css/bootstrap.min.css'
import UsuariosContext from './context/UsuariosContext'


function App() {





  return (
    <>
      <UsuariosContext>
        <Navegador/>
        <Rutas/>
      </UsuariosContext>
    </>
  )
}

export default App
