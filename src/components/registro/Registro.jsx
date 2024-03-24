import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../../css/registro.css'

const Registro = () => {
  return (
    <div className="colorFondo d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Form style={{ maxWidth: "400px", width: "100%" }}>
        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Apellido</Form.Label>
          <Form.Control type="text" placeholder="Enter surname" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="colorLetras">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Registro;