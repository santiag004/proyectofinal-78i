import React from 'react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'


export const UsuariosProvider = createContext()



const UsuariosContext = ({children}) => {
  const [usuarios, setUsuarios] = useState([])


  const getUsers = async () => {
    try{
      const response = await axios.get("http://localhost:8000/usuarios")
      setUsuarios(response.data)
    } catch (error){
      console.log(error)
    }
  }

  const addUsuario = async (usuario) => {
    try{
      const response = await axios.post("http://localhost:8000/usuarios", usuario)
      setUsuarios([...usuarios, response.data])
    } catch (error){
      console.log(error)
    }
  } 

  const logOut = () =>{
    localStorage.removeItem("user")
    window.location.href = "/"
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
    
    <UsuariosProvider.Provider value={{usuarios, getUsers, addUsuario, logOut}}>
      {children}
    </UsuariosProvider.Provider>

    
    
    </>
  )
}

export default UsuariosContext