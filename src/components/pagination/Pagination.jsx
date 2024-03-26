import { useContext } from "react";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";
import { Button, Table, Container } from "react-bootstrap";

function Pagination() {
  const { users, pageNumber, setPageNumber } = useContext(UserContextProvider);

  // Calcular los índices de inicio y fin de la página actual
  const startIndex = pageNumber * 10;
  const endIndex = Math.min(startIndex + 10, users.length);

  return (
    <>
      <Container>
        {users.lengh === 0 ? (
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
                  <td>{user.Nombre}</td>
                  <td>{user.Apellido}</td>
                  <td>{user.Email}</td>
                  <td>{user.Teléfono}</td>
                  <td>
                    <Button>Editar</Button>
                    <Button>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <Button
          variant="outline-success"
          disabled={pageNumber === 0}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline-success"
          disabled={endIndex >= users.length}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </Button>
      </Container>
    </>
  );
}

export default Pagination;
