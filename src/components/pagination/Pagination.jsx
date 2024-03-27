import { useContext, useState } from "react";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";
import { Button, Table, Container, Modal } from "react-bootstrap";
import Registro from "../registro/Registro"

function Pagination() {
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

  return (
    <>
      <Container>
        {users.lenght === 0 ? (
          <h1>no tenes registrado nungun usuario</h1>
        ) : (
          <Table striped bordered hover>
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
                      onClick={() => {
                        handleEdit(user);
                      }}>
                      Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteUser(user.id)}>
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
          disabled={endIndex >= users.length}
          onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </Button>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registro userToEdit={userToEdit} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Pagination;
