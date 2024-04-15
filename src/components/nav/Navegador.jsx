import { Container, Nav, Navbar, Button } from 'react-bootstrap';
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
    <Navbar expand="lg" className="navStyle sticky-top">
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
            <Nav.Link className='navLink mx-5' onClick={() => navigate('/')}>Inicio</Nav.Link>
            {user && user.admin ? (
              <Nav.Link className='navLink mx-5' onClick={() => navigate('/admin')}>Admin</Nav.Link>
            ) : null}

            {user ? (
              <Nav.Link className='navLink mx-5' onClick={() => navigate('/clases')}>Clases</Nav.Link>
            ) : null}
            <Nav.Link className='navLink mx-5' onClick={() => navigate('/contacto')}>Contacto</Nav.Link>
            <Nav.Link className='navLink mx-5' onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>


        {user ? (
          <Button className='loginButton mx-5' variant='outline-dark' onClick={() => logOut()}>Logout</Button>
        ) : (
          <Button className='loginButton mx-5' variant='outline-dark' onClick={() => navigate('/login')}>Login</Button>
        )}
      </Container>
    </Navbar>
  );
}

export default Navegador