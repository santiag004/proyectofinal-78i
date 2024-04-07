import { Routes, Route } from "react-router-dom";
import ViewAdmin from "../../views/viewsadmin/ViewAdmin";


const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<ViewAdmin />} />
      </Routes>
    </>
  );
};

export default Rutas;
