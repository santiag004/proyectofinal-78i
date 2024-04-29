import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import './navbarStyle.css'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContextProvider } from '../../context/usercontext/ContextUsers';

const Navegador = () => {
  const navigate = useNavigate()
  const { logOut } = useContext(UserContextProvider)
  const [expanded, setExpanded] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))

  const handleNavItemClick = () => {
    setExpanded(false); 
  }

  return (
    <Navbar expand="lg" className="navStyle sticky-top bg-black" expanded={expanded}>
      <Container>
        <Navbar.Brand className='brandLogo' href="/">
          <img
            src={logo}
            width="100"
            height="90"
            className="d-inline-block align-top brandLogo"
            alt="Logo HTMLift GYM"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="basic-navbar" className='me-auto'>
            {user && user.admin ? (
              <NavDropdown
                title={<span>Admin</span>}
                id="basic-nav-dropdown"
                className='navLink'
              >
                <NavDropdown.Item onClick={() => { navigate('/admin_users'); handleNavItemClick(); }}>Usuarios</NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate('/admin_classes'); handleNavItemClick(); }}>
                  Clases
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => { navigate('/admin_services'); handleNavItemClick(); }}>Servicios</NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="basic-navbar" className="me-auto navLinks">
            <Nav.Link className='navLink' onClick={() => { navigate('/'); handleNavItemClick(); }}>Inicio</Nav.Link>
            {user ? (
              <Nav.Link className='navLink' onClick={() => { navigate('/clases'); handleNavItemClick(); }}>Clases</Nav.Link>
            ) : null}
            <Nav.Link className='navLink' onClick={() => { navigate('/contacto'); handleNavItemClick(); }}>Contacto</Nav.Link>
            <Nav.Link className='navLink' onClick={() => { navigate('/about'); handleNavItemClick(); }}>About</Nav.Link>
          </Nav>
          {user ? (
            <Button className='loginButton' variant='outline-dark' onClick={() => logOut()}>Cerrar Sesión</Button>
          ) : (
            <Button className='loginButton' variant='outline-dark' onClick={() => { navigate('/login'); handleNavItemClick(); }}>Iniciar Sesión</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;