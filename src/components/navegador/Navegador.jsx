import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UsuariosProvider } from '../../context/UsuariosContext';

export const Navegador = () => {


    const navigate = useNavigate()

    const{logOut} = useContext(UsuariosProvider)


    const user = JSON.parse(localStorage.getItem("user"))


  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      {user ? (
        <Button variant='danger' onClick={() => logOut()} >Cerrar Sesion</Button>
      ) : (
        <Button variant='success' onClick={() => navigate("/login")}>Iniciar Sesion</Button>
      )}

      </Container>
    </Navbar>

    </>
  )
}

export default Navegador