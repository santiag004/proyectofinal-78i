import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import './navbarStyle.css'
import logo2 from '../../assets/logo2.png'

const Navegador = () => {
  return (
    <Navbar expand="lg" className="navStyle">
      <Container>
      <Navbar.Brand className='brandLogo' href="#home">
  <img
    src={logo2}
    width="85"
    height="80" 
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
        <Button className='mx-5' variant='outline-light'>Login</Button>
      </Container>
    </Navbar>
  );
}

export default Navegador