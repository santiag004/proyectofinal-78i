import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Registro = ({ userToEdit, handleClose }) => { 
  const { addUsuario, upDateUser } = useContext(UserContextProvider);

  const [usuario, setUsuario] = useState({
    _id: userToEdit ? userToEdit._id : uuidv4(),
    nombre: userToEdit ? userToEdit.nombre : "",
    apellido: userToEdit ? userToEdit.apellido : "",
    email: userToEdit ? userToEdit.email : "",
    telefono: userToEdit ? userToEdit.telefono : "",
    password: "",
    isAdmin: false,
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
        password: "",
        isAdmin: false,
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
        password: "",
        isAdmin: false,
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
            />
          </Form.Group>
  
          {userToEdit ? (
            <Form.Group className="mb-3">
              <Form.Label className="colorLetras">telefono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="telefono"
                value={usuario.telefono}
                onChange={handleChange}
                name="telefono"
              />
            </Form.Group>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label className="colorLetras">password</Form.Label>
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
                      checked={usuario.isAdmin}
                      onChange={handleChange}
                      name="isAdmin"
                    />
                  </Form.Group>
                ) : null}
  
          {userToEdit ? (
            <Button type="submit" variant="warning">
              Editar Usuario
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
    </div>
  )
}
export default Registro;
