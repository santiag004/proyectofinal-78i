import { React, useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import '../../css/login.css'
import img from "../../assets/img/img-login.jpg";
import {Link, useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";


const Login = () => {


  const navigate = useNavigate()

  const{users, UsuarioLogueado, loginUsuario} = useContext(UserContextProvider)
  

  const registro = (e) =>{
    navigate('/registro')
  }


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (UsuarioLogueado) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        text: "Sesión iniciada con éxito",
        confirmButtonText: "ACEPTAR"
      });

      const usuario = {
        nombre: UsuarioLogueado.nombre,
        apellido: UsuarioLogueado.apellido,
        admin: UsuarioLogueado.admin,
        isSuspended: UsuarioLogueado.isSuspended
      };

      localStorage.setItem("user", JSON.stringify(usuario));
      
      setTimeout(() => {
        navigate("/")
      }, 1700);
    } 
  }, [UsuarioLogueado]);



  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor completa ambos campos.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    try {
      loginUsuario({email, password})
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="colorFondo">
      <Container >
      <Row className="justify-content-center align-items-center">
        <Col md={6}> 
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="colorPalabras">Correo Electrónico</Form.Label>
              <Form.Control type="email"
                placeholder="ejemplo@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={50}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label className="colorPalabras">Contraseña</Form.Label>
              <Form.Control type="password"
                placeholder="Ingrese la contraseña"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={30}
                />
            </Form.Group>

            <Button className="buttonLogin" type="submit">
              INICIAR SESIÓN
            </Button>
            <p className="text-white my-3">¿Todavia no tienes cuenta? <Link to="/registro" onClick={registro} className="colorRegistro">Registrate</Link></p>
          </Form>
        </Col>
        <Col md={6}>
          <figure >
            <img src={img} alt="img prueba" className="img-fluid w-100" />
          </figure>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;