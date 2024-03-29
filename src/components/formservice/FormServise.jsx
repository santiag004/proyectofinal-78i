import { useContext, useState } from "react";
import { serviceContextProvider } from "../../context/serviceContext/ServiceContext";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormService = ({ serviceToEdit, handleClose }) => {
  const { addService, upDateService } = useContext(serviceContextProvider);

  const [service, setService] = useState({
    id: serviceToEdit ? serviceToEdit.id : uuidv4(),
    url: serviceToEdit ? serviceToEdit.url : "",
    titulo: serviceToEdit ? serviceToEdit.tituloo : "",
    descripcion: serviceToEdit ? serviceToEdit.descripcion : "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (serviceToEdit) {
      upDateService(service);
      Swal.fire({
        title: "Servicio editado",
        text: "Servicio editado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();
      setService({
        id: uuidv4(),
        url: "",
        titulo: "",
        descripcion: "",
      })
    } else {
      Swal.fire({
        title: "Exitoso",
        text: "Servicio registrado con exito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      addService(service);
      setService({
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
            <Form.Label>Url del servicio</Form.Label>
            <Form.Control
              type="url"
              name="url"
              value={service.url}
              onChange={handleChange}
              placeholder="Url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              name="titulo"
              value={service.titulo}
              onChange={handleChange}
              placeholder="Titulo"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              type="text"
              name="descripcion"
              value={service.descripcion}
              onChange={handleChange}
              placeholder="descripcion"
            />
          </Form.Group>
          {serviceToEdit ? (
            <Button type="submit" variant="success">
              Editar servicio
            </Button>
          ) : (
            <Button type="submit"> Agregar servicio </Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default FormService;
