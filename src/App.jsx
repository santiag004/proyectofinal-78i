import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/Router/Router'
import Navegador from './components/nav/Navegador'
import Footer from './components/footer/Footer'
import WeatherContext from './context/WeatherContext';
import ContextUsers from "./context/usercontext/ContextUsers";
import ClassesContext from "./context/classescontext/ClassesContext";
import ServiceContext from "./context/serviceContext/ServiceContext";
import ViewAdmin from "./views/viewsadmin/ViewAdmin";

function App() {
  return (
    <>
    <ContextUsers>
    <ClassesContext>
    <ServiceContext>
      <WeatherContext>
        <Navegador/>
        <Router />
        <Footer/>
      </WeatherContext>
    </ServiceContext>
    </ClassesContext>
    </ContextUsers>
    </>
  );
}

export default App;
