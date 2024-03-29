import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const serviceContextProvider = createContext();

const ServiceContext = ({ children }) => {
  const [services, setServices] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  //funcion para crear un servicio
  const addService = async (service) => {
    try {
      let response = await axios.post(
        "http://localhost:8080/services",
        service
      );
      setServices([...service, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Función para traer servicios
  const getService = async () => {
    try {
      let response = await axios.get("http://localhost:8080/services");
      setServices(response.data);
    } catch (e) {
      console.log(e);
    }
  };

// Función para editar un servicio
const upDateService = async (service) => {
  try {
    await axios.put(`http://localhost:8080/services/${service.id}`, service);
    await getService();
  } catch (error) {
    console.log(error);
  }
};


  // Función para eliminar un servicio
  const deleteService = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/services/${id}`);
      await getService();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  const startIndex = pageNumber * 10;
  const endIndex = startIndex + 10;

  return (
    <serviceContextProvider.Provider
      value={{
        services,
        addService,
        getService,
        upDateService,
        deleteService,
        setPageNumber,
      }}>
        {children}
      </serviceContextProvider.Provider>
  );
};

export default ServiceContext;
