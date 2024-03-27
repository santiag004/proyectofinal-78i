import { useContext,useState } from "react";
import {UserContextProvaider} from "../../context/usercontext/ContextUsers"
import { Button, Table, Modal } from "react-bootstrap";


const UserTable = () => {
  const { users, deleteUser } = useContext(UserContextProvaider);
  const [userEdit, setUserEdit] = useState(null);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (userToEdit) => {
    setUserEdit(userToEdit);
    setShow(true);
  };

  return (
    <>
    <h2>Tabla de usuarios</h2>

    {users.length === 0 ? (
      <h2>No Tenemos productos para mostrarte</h2>
    ) : (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
              <>
              <tr>
                <td>{u.id}</td>
                <td>{u.Nombre}</td>
                <td>{u.Apellido}</td>
                <td>{u.Email}</td>
                <td>{u.Teléfono}</td>
                <td>{u.isAdmin ? "Si" : "No"}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleEdit(u)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUser(u.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    )}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Registro editUsuario={editUsuario} handleClose={handleClose} /> */}
      </Modal.Body>
    </Modal>
  </>
  );
};

export default UserTable;
