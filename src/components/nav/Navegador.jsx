import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import './navbarStyle.css'
import logo from '../../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';

const Navegador = () => {

const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="navStyle">
      <Container>
        <Navbar.Brand className='brandLogo' href="#home">
          <img
            src={logo}
            width="100"
            height="90"
            className="d-inline-block align-top"
            alt="Logo HTMLift GYM"
          />

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navLink mx-5' href="#home">Inicio</Nav.Link>
            <Nav.Link className='navLink mx-5' href="#contacto">Contacto</Nav.Link>
            <Nav.Link className='navLink mx-5' href="#aboutus">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className='loginButton mx-5' variant='outline-dark'>Login</Button>
      </Container>
    </Navbar>
  );
}

export default Navegador