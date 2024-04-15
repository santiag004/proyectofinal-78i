import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import './navbarStyle.css'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContextProvider } from '../../context/usercontext/ContextUsers';


const Navegador = () => {

  const navigate = useNavigate()

  const { logOut } = useContext(UserContextProvider)


  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <Navbar expand="lg" className="navStyle sticky-top bg-black">
      <Container>
        <Navbar.Brand className='brandLogo' href="#home">
          <img
            src={logo}
            width="100"
            height="90"
            className="d-inline-block align-top brandLogo"
            alt="Logo HTMLift GYM"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav id="basic-navbar" className='me-auto'>
            {user && user.admin ? (
              <NavDropdown
              title={<span>Admin</span>}
                id="basic-nav-dropdown"
                className='navLink'
                >
                <NavDropdown.Item onClick={() => navigate('/admin_users')}>Usuarios</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/admin_classes')}>
                  Clases
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/admin_services')}>Servicios</NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="basic-navbar" className="me-auto navLinks">
            <Nav.Link className='navLink' onClick={() => navigate('/')}>Inicio</Nav.Link>
            {user ? (
              <Nav.Link className='navLink' onClick={() => navigate('/clases')}>Clases</Nav.Link>
              ) : null}
            <Nav.Link className='navLink' onClick={() => navigate('/contacto')}>Contacto</Nav.Link>
            <Nav.Link className='navLink' onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
      {user ? (
                <Button className='loginButton' variant='outline-dark' onClick={() => logOut()}>Cerrar Sesión</Button>
              ) : (
                <Button className='loginButton' variant='outline-dark' onClick={() => navigate('/login')}>Iniciar Sesión</Button>
              )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador