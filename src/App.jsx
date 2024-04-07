import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Rutas/Rutas'
import Navegador from './components/nav/Navegador'
import Footer from './components/footer/Footer'
import WeatherContext from './context/WeatherContext';
import UsuariosContext from './context/UsuariosContext'
import ContextUsers from "./context/usercontext/ContextUsers";
import ClassesContext from "./context/classescontext/ClassesContext";
import ServiceContext from "./context/serviceContext/ServiceContext";
import ViewAdmin from "./views/viewsadmin/ViewAdmin";

function App() {
  return (
    <>
    <UsuariosContext>
    <ContextUsers>
    <ClassesContext>
    <ServiceContext>
      <WeatherContext>
        <Navegador/>
        <Rutas />
        <Footer/>
      </WeatherContext>
    </ServiceContext>
    </ClassesContext>
    </ContextUsers>
    </UsuariosContext>
    </>
  );
}

export default App;
