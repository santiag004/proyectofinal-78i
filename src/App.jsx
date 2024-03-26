import "bootstrap/dist/css/bootstrap.min.css";
import ContextUsers from "./context/usercontext/ContextUsers";
import ViewAdmin from "./views/viewsadmin/ViewAdmin";

function App() {
  return (
    <>
      <ContextUsers>
       <ViewAdmin />
      </ContextUsers>
    </>
  );
}

export default App;
