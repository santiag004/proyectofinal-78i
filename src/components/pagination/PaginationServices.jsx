import { useContext, useState } from "react";
import { serviceContextProvider } from "../../context/serviceContext/ServiceContext";
import { Button, Table, Container, Modal } from "react-bootstrap";
import Swal from 'sweetalert2';
import FormServise from './../formservice/FormServise';

function PaginationServices() {
  const { services, pageNumber, setPageNumber, deleteService } = useContext(serviceContextProvider);
  
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  // Calcular los índices de inicio y fin de la página actual
  const startIndex = pageNumber * 10;
  const endIndex = Math.min(startIndex + 10, users.length);

  //Funcion para el manejo del servicio a editar
  const handleEdit = (service) => {
    setServiceToEdit(service);
    setShow(true);
  };

  const mostrarConfirmacion = (id) => {
    Swal.fire({
      title: '¿Estás seguro que quieres borrar este servicio?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
        console.log('Borrado cancelado');
      }
    });
  };


  return (
    <>
      <Container>
        {services.lenght === 0 ? (
          <h1>no tenes registrado nungun usuario</h1>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Url</th>
                <th>Titulo</th>
                <th>descripcion</th>
              </tr>
            </thead>
            <tbody>
              {services.slice(startIndex, endIndex).map((s) => (
                <tr>
                  <td>{s.id}</td>
                  <td>{s.url}</td>
                  <td>{s.titulo}</td>
                  <td>{s.email}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        handleEdit(s);
                      }}>
                      Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={()=>{mostrarConfirmacion(s.id)}}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Button
          variant="outline-success"
          disabled={pageNumber === 0}
          onClick={() => setPageNumber(pageNumber - 1)}>
          Previous
        </Button>
        <Button
          variant="outline-success"
          disabled={endIndex >= services.length}
          onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar servicio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormServise serviceToEdit={serviceToEdit} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaginationServices;
