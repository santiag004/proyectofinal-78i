import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContextProvaider = createContext();

const ContextUsers = ({ children }) => {
  
  const [users, setUsers] = useState([]);

  //funcion para traer usuarios
  const getUsers = async () => {
    try {
      let response = await axios.get("http://localhost:8080/usuarios");
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  //funcion para agregar un nuevo usuario
  // const addUser = async (user) => {
  //   try {
  //     let response = await axios.post("https://localhost:8080/usuario", user);
  //     setUsers([...users, response.data]);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //funcion para editar un  usuario
  const updateUser = async (user) => {
    try {
      await axios.put(`http://localhost:8080/usuario/${id}`, user);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //funcion para eliminar un usuario
const deleteUser= async (id)=>{
    try {
        await  axios.delete(`http://localhost:8080/usuario/${id}`);
        await getUsers()
    } catch (e) {
        console.log(e)
    }
}

  useEffect(() => {
    getUsers();
    // addUser();
  }, []);

  return (
    <UserContextProvaider.Provider value={{users,getUsers,deleteUser,updateUser}}>
        {children}
    </UserContextProvaider.Provider>
  );
};

export default ContextUsers;
