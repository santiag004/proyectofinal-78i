import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import emailjs from 'emailjs-com';
import './detalleStyle.css'
import Swal from 'sweetalert2';

const Detalles = () => {


  const [nombre, setNombre] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [telefono, setTelefono] = useState(' ')
  const [consulta, setConsulta] = useState(' ')

  const enviarEmail = async (e) => { 
    e.preventDefault();
    try {
      emailjs.init("ezXhsZos_l1IZzd5w");
      
      const result = await emailjs.sendForm('service_bxoj5ea', 'template_wco04c8', e.target);
      
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado con éxito!',
        showConfirmButton: false,
        timer: 1500
      });
  
      setNombre('');
      setEmail('');
      setTelefono('');
      setConsulta('');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al enviar el mensaje, intenta de nuevo.',
      });
    }
  }


  return (
    <>
      <Container className='contenedorForm mt-2 mb-1'>
        <h1 className='text-center mt-5'>Envianos tu consulta sobre el plan seleccionado</h1>
        <Row>
          <Col>
            <Form onSubmit={enviarEmail} className='formularioDetalles'>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name='user_name'
                  placeholder="Ingresá tu nombre"
                  maxLength="25"
                  pattern="[A-Za-z ]+"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name='user_email'
                  placeholder="Ingresá tu email"
                  required
                  maxLength="30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Ingresá tu número de teléfono"
                  required
                  maxLength="15"
                  pattern="\+?\d{10,15}"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicQuery">
                <Form.Label>Consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Escribe tu consulta aquí"
                  maxLength="300"
                  value={consulta}
                  onChange={(e) => setConsulta(e.target.value)}
                />
              </Form.Group>
              <Button className='my-3' variant="outline-light" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detalles