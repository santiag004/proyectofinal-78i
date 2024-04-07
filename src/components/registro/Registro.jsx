import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../../css/registro.css'
import {UsuariosProvider} from "../../context/UsuariosContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2"

const Registro = () => {
  const {addUser} = useContext(UsuariosProvider)

  const [usuario, setUsuario] = useState({
    id: uuidv4(),
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    isAdmin: false
  })
 
  const handleChange = (e) =>{
    setUsuario({ ...usuario, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    addUser(usuario)
    Swal.fire({
      title: "Registro exitoso",
      text: "Usuario registrado con exito",
      icon: "success",
      confirmButtonText: "Aceptar"
    })
    setUsuario({
      id: uuidv4(),
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    isAdmin: false
    })
  }


  return (
    <div className="colorFondo d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Form onSubmit={handleSubmit}  style={{ maxWidth: "400px", width: "100%" } }>
        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={usuario.nombre} onChange={handleChange} name="nombre"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Apellido</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" value={usuario.apellido} onChange={handleChange} name="apellido"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={usuario.email} onChange={handleChange} name="email"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={usuario.password} onChange={handleChange} name="password"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registro;