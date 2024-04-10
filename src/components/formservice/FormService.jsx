import { useContext, useState } from "react";
import { serviceContextProvider } from "../../context/serviceContext/ServiceContext";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

import './servicios.css'

const FormService = ({ serviceToEdit, handleClose }) => {
  const { addService, upDateService } = useContext(serviceContextProvider);
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const [service, setService] = useState({
    id: serviceToEdit ? serviceToEdit.id : uuidv4(),
    url: serviceToEdit ? serviceToEdit.url : "",
    titulo: serviceToEdit ? serviceToEdit.titulo : "",
    descripcion: serviceToEdit ? serviceToEdit.descripcion : "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setService({ ...service, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Verificar si algún campo requerido está vacío
      if (!service.url || !service.titulo || !service.descripcion) {
        Swal.fire({
          title: "Error",
          text: "Por favor, completa todos los campos.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return; // Detener el envío del formulario si algún campo está vacío
      }

      if (!urlRegex.test(service.url)) {
        Swal.fire({
          title: "Error",
          text: "Por favor, introduce una URL válida.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return; // Detener el envío del formulario si la URL no es válida
      }

      if (serviceToEdit) {
        upDateService(service);
        Swal.fire({
          title: "Servicio editado",
          text: "Servicio editado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
          timer: 1500,
        });
        handleClose();
      } else {
        Swal.fire({
          title: "Exitoso",
          text: "Servicio registrado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });

        addService(service);
        // Restablecer el estado del formulario después de enviar
        setService({
          id: uuidv4(),
          url: "",
          titulo: "",
          descripcion: "",
        });
      }
    };


  return (
    <>
      <Container>
        <h3 className="text-center py-3">Administrar Servicios</h3>
        <Form className="formulario-services" onSubmit={handleSubmit}>
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
