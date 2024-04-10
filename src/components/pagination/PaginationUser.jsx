import { useContext, useState } from "react";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";
import { Button, Table, Container, Modal } from "react-bootstrap";
import Registro from "../registro/Registro"
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import './users.css'

function PaginationUser() {
  const { users, pageNumber, setPageNumber, deleteUser } = useContext(UserContextProvider);
  
  const [userToEdit, setUserToEdit] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  // Calcular los índices de inicio y fin de la página actual
  const startIndex = pageNumber * 10;
  const endIndex = Math.min(startIndex + 10, users.length);

  //Funcion para el manejo del usuario a editar
  const handleEdit = (user) => {
    setUserToEdit(user);
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
        deleteUser(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
        console.log('Borrado cancelado');
      }
    });
  };


  return (
    <>
      <Container>
        {users.lenght === 0 ? (
          <h1>no tenes registrado nungun usuario</h1>
        ) : (
          <Table className="user-table" striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(startIndex, endIndex).map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.nombre}</td>
                  <td>{user.apellido}</td>
                  <td>{user.email}</td>
                  <td>{user.telefono}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      className="botonEdit mx-4"
                      onClick={() => {
                        handleEdit(user);
                      }}> <FaEdit/>
                     
                    </Button>
                    <Button
                    className="botonDelete"
                      variant="outline-danger"
                      onClick={()=>{mostrarConfirmacion(user.id)}}>
                     <FaTrashAlt/> 
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Button
          variant="outline-success"
          className="mx-4"
          disabled={pageNumber === 0}
          onClick={() => setPageNumber(pageNumber - 1)}>
          Anterior
        </Button>
        <Button
          variant="outline-success"
          disabled={endIndex >= users.length}
          onClick={() => setPageNumber(pageNumber + 1)}>
          Siguiente
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="">
          <h1 className="text-center">Editar Usuario</h1>
          <Registro userToEdit={userToEdit} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaginationUser;
