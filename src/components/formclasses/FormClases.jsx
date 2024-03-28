import { useContext, useState } from "react";
import { ClassesContextProvider } from "../../context/classescontext/ClassesContext";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormClases = ({ classToEdit, handleClose }) => {
  const { addClass, upDateClasses } = useContext(ClassesContextProvider);

  const [clase, setClase] = useState({
    id: classToEdit ? classToEdit.id : uuidv4(),
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
    if (classToEdit) {
      upDateClasses(clase);
      handleClose;
    } else {
      Swal.fire({
        title: "Registro Exitoso",
        text: "Clase registrado con exito",
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
        <h3>Formulario de clases</h3>
        <Form onSubmit={handleSubmit}>
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
