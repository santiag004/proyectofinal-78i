import { React, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import '../../css/login.css'
import img from "../../assets/img/img.jpg";
import {Link, useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";
import { UserContextProvider } from "../../context/usercontext/ContextUsers";


const Login = () => {


  const navigate = useNavigate()

  const{users} = useContext(UserContextProvider)

  const registro = (e) =>{
    navigate('/registro')
  }


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const user = users.find((user) => user.email === email && user.password === password)
      if (user){
        Swal.fire({
          title: "Bienvenido",
          text: "Sesion iniciada con exito",
          icon: "success",
          confirmButtonText: "Aceptar",
        })
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
      }
      else{
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Aceptar",
        })
      }
    } catch (error){
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
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label className="colorPalabras">Contraseña</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
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