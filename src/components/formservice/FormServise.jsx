import { useContext, useState } from "react";
import { serviceContextProvider } from "../../context/serviceContext/ServiceContext";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormService = ({ serviceToEdit, handleClose }) => {
  const { addService, upDateService} = useContext(serviceContextProvider);

  const [servicio, setServicio] = useState({
    id: serviceToEdit ? serviceToEdit.id : uuidv4(),
    titulo: serviceToEdit ? serviceToEdit.titulo : "",
    url: serviceToEdit ? serviceToEdit.url : "",
    descripcion: serviceToEdit ? serviceToEdit.descripcion : "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceToEdit) {
      upDateClasses(servicio);
      Swal.fire({
        title: "Clase Editado",
        text: "Clase editado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();
      setClase({
        id: uuidv4(),
        detalle: "",
        profesor: "",
        fecha: "",
        hora: "",
      })
    } else {
      Swal.fire({
        title: "Registro Exitoso",
        text: "Clase registrado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      addService(servicio);
      setClase({
        id: uuidv4(),
        detalle: "",
        profesor: "",
        fecha: "",
        hora: "",
      });
    }
  };


  return (
    <>
      <Container>
        <h3>Formulario de servicios</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>url</Form.Label>
            <Form.Control
              type="url"
              name="url"
              value={servicio.url}
              onChange={handleChange}
              placeholder="Url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>titulo</Form.Label>
            <Form.Control
              type="text"
              name="titulo"
              value={servicio.titulo}
              onChange={handleChange}
              placeholder="titulo"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>desripcion</Form.Label>
            <Form.Control
              type="text"
              name="descripcion"
              value={servicio.descripcion}
              onChange={handleChange}
              placeholder="descripcion"
            />
          </Form.Group>
          {serviceToEdit ? (
            <Button type="submit" variant="success">
              Editar servicio
            </Button>
          ) : (
            <Button type="submit"> Agregar servicio</Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default FormService;
