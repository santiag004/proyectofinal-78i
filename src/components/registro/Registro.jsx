import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Registro = ({ userToEdit, handleClose }) => { 
  const { addUsuario, upDateUser, users } = useContext(UserContextProvider);

  const [usuario, setUsuario] = useState({
    _id: userToEdit ? userToEdit._id : uuidv4(),
    nombre: userToEdit ? userToEdit.nombre : "",
    apellido: userToEdit ? userToEdit.apellido : "",
    email: userToEdit ? userToEdit.email : "",
    telefono: userToEdit ? userToEdit.telefono : "",
    password: "",
    admin: userToEdit? userToEdit.admin : false,
  });
 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUsuario({ ...usuario, [name]: checked });
    } else {
      setUsuario({ ...usuario, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !usuario.nombre ||
      !usuario.apellido ||
      !usuario.email ||
      !usuario.telefono ||
      (!userToEdit && !usuario.password)
    ) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return; // Detener la ejecución del handleSubmit si hay campos vacíos o null
    }
  
    // Comprobación de email duplicado
    const emailExists = users.some(
      (user) => user.email === usuario.email && user._id !== usuario._id
    );
    if (emailExists) {
      Swal.fire({
        title: "Error",
        text: "El email ingresado ya está registrado.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return; // Detener la ejecución del handleSubmit si el email ya está en uso
    }

    if (userToEdit) {
      upDateUser(usuario);;
      Swal.fire({
        title: "Usuario Editado",
        text: "Usuario editado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();

      setUsuario({
        _id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        admin: false,
      });
    } else {
      addUsuario(usuario); 
      Swal.fire({
        title: "Registro Exitoso",
        text: "Usuario registrado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setUsuario({
        id: uuidv4(),
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: "",
        admin: false,
      });
    }
  };

  return (
    <div className="colorFondo d-flex justify-content-center align-items-center">
        <Form onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
          <Form.Group className="mb-3">
            <Form.Label className="colorLetras">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter nombre"
              value={usuario.nombre}
              onChange={handleChange}
              name="nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="colorLetras">Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter apellido"
              value={usuario.apellido}
              onChange={handleChange}
              name="apellido"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="colorLetras">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={usuario.email}
              onChange={handleChange}
              name="email"
              disabled={userToEdit}
            />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label className="colorLetras">Telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Telefono"
                value={usuario.telefono}
                onChange={handleChange}
                name="telefono"
              />
            </Form.Group>
  
          {userToEdit ? (
            null
          ) : (
            <Form.Group className="mb-3">
              <Form.Label className="colorLetras">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={usuario.password}
                onChange={handleChange}
                name="password"
              />
            </Form.Group>
          )}
          {userToEdit ? (
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Admin"
                      checked={usuario.admin}
                      onChange={handleChange}
                      name="admin"
                    />
                  </Form.Group>
                ) : null}
  
          {userToEdit ? (
            <Button type="submit" className="buttonLogin">
              Editar Usuario
            </Button>
          ) : (
            <Button className="buttonLogin" type="submit">
              Submit
            </Button>
          )}
        </Form>
    </div>
  )
}
export default Registro;
