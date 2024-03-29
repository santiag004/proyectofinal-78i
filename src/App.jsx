import "bootstrap/dist/css/bootstrap.min.css";
import ContextUsers from "./context/usercontext/ContextUsers";
import ClassesContext from "./context/classescontext/ClassesContext";
import ServiceContext from "./context/serviceContext/ServiceContext";
import ViewAdmin from "./views/viewsadmin/ViewAdmin";


function App() {
  return (
    <>
      <ServiceContext>
        <ViewAdmin />
      </ServiceContext>
    </>
  );
}

export default App;
