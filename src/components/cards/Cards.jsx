import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../css/cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock} from '@fortawesome/free-solid-svg-icons'

const Cards = () => {
  return (
    <>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          <Card style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">Detalle de Clases</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> Horario
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>Fecha
              </Card.Text>
              <Card.Link href="#" className="cardBody d-flex justify-content-center text-white text-decoration-none">
                Profesora
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
