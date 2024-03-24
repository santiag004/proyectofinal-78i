import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import '../../css/login.css'
import img from "../../assets/img/img.jpg";
import {Link, useNavigate} from 'react-router-dom'


const Login = () => {


  const navigate = useNavigate()

  const registro = (e) =>{
    navigate('/registro')
  }


  return (
    <div className="colorFondo">
      <Container >
      <Row className="justify-content-center align-items-center">
        <Col md={6}> 
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="colorPalabras">Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="" />
            </Form.Group>

            <Form.Group className="mb-3 " controlId="formBasicPassword">
              <Form.Label className="colorPalabras">Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" className=""/>
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