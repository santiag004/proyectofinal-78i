import { useContext, useState } from "react";
import { ClassesContextProvider } from "../../context/classescontext/ClassesContext";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import './clases.css'

const FormClases = ({ classToEdit, handleClose }) => {
  const { addClass, upDateClasses} = useContext(ClassesContextProvider);

  const [clase, setClase] = useState({
    _id: classToEdit ? classToEdit._id : uuidv4(),
    detalle: classToEdit ? classToEdit.detalle : "",
    profesor: classToEdit ? classToEdit.profesor : "",
    fecha: classToEdit ? classToEdit.fecha : "",
    hora: classToEdit ? classToEdit.hora : "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setClase({ ...clase, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verificar si algún campo está vacío
    if (!clase.detalle || !clase.profesor || !clase.fecha || !clase.hora) {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete todos los campos antes de enviar el formulario.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return; // Salir de la función sin enviar el formulario
    }
  
    if (classToEdit) {
      upDateClasses(clase);
      Swal.fire({
        title: "Clase Editado",
        text: "Clase editado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
        timer: 1500,
      });
      handleClose();
      setClase({
        _id: uuidv4(),
        detalle: "",
        profesor: "",
        fecha: "",
        hora: "",
      })
    } else {
      Swal.fire({
        title: "Registro Exitoso",
        text: "Clase registrada con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      addClass(clase);
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
        <h3 className="text-center py-3">Administrar Clases</h3>
        <Form className="formulario-clases" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Detalle de la clase</Form.Label>
            <Form.Control
              type="text"
              name="detalle"
              value={clase.detalle}
              onChange={handleChange}
              placeholder="detalle"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Profesor/a</Form.Label>
            <Form.Control
              type="text"
              name="profesor"
              value={clase.profesor}
              onChange={handleChange}
              placeholder="Profesor"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              value={clase.fecha}
              onChange={handleChange}
              placeholder="Fecha"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Hora</Form.Label>
            <Form.Control
              type="time"
              name="hora"
              value={clase.hora}
              onChange={handleChange}
              placeholder="Hora"
            />
          </Form.Group>
          {classToEdit ? (
            <Button type="submit" variant="success">
              Editar clase
            </Button>
          ) : (
            <Button type="submit"> Agregar clase </Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default FormClases;
