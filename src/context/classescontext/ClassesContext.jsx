import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ClassesContextProvider = createContext();

const ClassesContext = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  //funcion para crear un clase
  const addClass = async (clase) => {
    try {
      let response = await axios.post("http://localhost:8080/clases", clase);
      setClasses([...clase, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para obtener las clases de la base de datos
  const getClasses = async () => {
    try {
      let response = await axios.get(`http://localhost:8080/clases`); // Corregido: Esperar la respuesta
      setClasses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //funcio para editar las clases
  const upDateClasses = async (classes) => {
    try {
      await axios.put(`http://localhost:8080/clases/${classes.id}`, classes);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para elinar una clase
  const deleteClasses = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/clases/${classes.id}`);
      setClasses(classes.filter((c) => c.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClasses();
  }, []);

  const startIndex = pageNumber * 10;
  const endIndex = startIndex + 10;

  return (
    <>
      <ClassesContextProvider.Provider
        value={{
          classes,
          addClass,
          upDateClasses,
          getClasses,
          deleteClasses,
          pageNumber,
          setPageNumber,
        }}>
        {children}
      </ClassesContextProvider.Provider>
    </>
  );
};

export default ClassesContext;
