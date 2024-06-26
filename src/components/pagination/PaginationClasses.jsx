import { useContext, useState } from "react";
import { ClassesContextProvider } from "../../context/classescontext/ClassesContext.jsx";
import { Button, Table, Container, Modal } from "react-bootstrap";
import FormClases from "../formclasses/FormClases.jsx";
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './globalstyles.css'

function PaginationClasses() {
  const {
    classes,
    deleteClasses,
    pageNumber,
    setPageNumber,
  } = useContext(ClassesContextProvider);

  const [classToEdit, setClassToEdit] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // Calcular los índices de inicio y fin de la página actual
  const startIndex = pageNumber * 10;
  const endIndex = Math.min(startIndex + 10, classes.length);

  //Funcion para el manejo del usuario a editar
  const handleEdit = (user) => {
    setClassToEdit(user);
    setShow(true);
  };

  const mostrarConfirmacion = (id) => {
    Swal.fire({
      title: '¿Estás seguro que quieres borrar este usuario?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClasses(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
        console.log('Borrado cancelado');
      }
    });
  };

  return (
    <>
      <Container className="administration-container">
        {classes.length === 0 ? (
          <h1>No hay clases cargadas</h1>
        ) : (
          <Table responsive striped bordered hover variant="dark" className="my-3">
            <thead>
              <tr key={classes._id}>

                <th>Detalle</th>
                <th>Profesor/a</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {classes.slice(startIndex, endIndex).map((c) => (
                <tr key={c._id}>

                  <td>{c.detalle}</td>
                  <td>{c.profesor}</td>
                  <td>{c.fecha}</td>
                  <td>{c.hora}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      className="botonEdit"
                      onClick={() => {
                        handleEdit(c);
                      }}>
                      <FaEdit/>
                    </Button>
                    <Button
                    className="botonDelete"
                      variant="outline-danger"
                      onClick={() => mostrarConfirmacion(c._id)}>
                      <FaTrashAlt/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Container className="pages-container">
        <Button
          variant="outline-success"
          className="pagesButton"
          disabled={pageNumber === 0}
          onClick={() => setPageNumber(pageNumber - 1)}>
          Anterior
        </Button>
        <Button
          variant="outline-success"
          className="pagesButton"
          disabled={endIndex >= classes.length}
          onClick={() => setPageNumber(pageNumber + 1)}>
          Siguiente
        </Button>
        </Container>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormClases classToEdit={classToEdit} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaginationClasses;
