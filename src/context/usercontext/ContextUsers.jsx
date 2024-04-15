import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const UserContextProvider = createContext();

const ContextUsers = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [UsuarioLogueado, setUsuarioLogueado] = useState()

  const addUsuario = async (usuario) => {
    try{
      const response = await axios.post("http://localhost:8000/api/users/register", usuario)
      setUsers([...users, response.data])
    } catch (error){
      console.log(error)
    }
  } 

  // Función para traer usuarios
  const getUsers = async () => {
    try {
      let response = await axios.get("http://localhost:8000/api/users");
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Función para editar un usuario
  const upDateUser = async (users) => {
    try {
      await axios.put(`http://localhost:8000/api/user/${users._id}`, users);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Función para eliminar un usuario
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/user/${id}`);
      await getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const logOut = () =>{
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  const loginUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        usuario
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      setUsuarioLogueado(decoded);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = pageNumber * 10;
  const endIndex = startIndex + 10;

  return (
    <UserContextProvider.Provider
      value={{
        users,
        getUsers,
        deleteUser,
        upDateUser,
        pageNumber,
        setPageNumber,
        addUsuario,
        logOut,
        UsuarioLogueado,
        loginUsuario
      }}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default ContextUsers;
