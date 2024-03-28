import "bootstrap/dist/css/bootstrap.min.css";
import ContextUsers from "./context/usercontext/ContextUsers";
import ClassesContext from "./context/classescontext/ClassesContext";
import ViewAdmin from "./views/viewsadmin/ViewAdmin";

function App() {
  return (
    <>
      <ContextUsers>
        <ClassesContext>
          <ViewAdmin />
        </ClassesContext>
      </ContextUsers>
    </>
  );
}

export default App;
