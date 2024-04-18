import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../css/cards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock} from '@fortawesome/free-solid-svg-icons'
import { ClassesContextProvider } from "../../context/classescontext/ClassesContext.jsx";

const Cards = () => {
  const { classes } = useContext(ClassesContextProvider)
  return (
    <>
    {classes.length === 0 ? (
      <h2 className="text-center">No hay clases disponibles ahora.</h2>
    ) : (
      <Row>
      {classes.map((clase) => (
            <>
            <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="py-4 d-flex justify-content-center"
        >
          
          
        
            <Card style={{ width: "18rem" }} key={clase._id}>
            <Card.Body className="cardBody">
              <Card.Title className="cardBody  text-white d-flex justify-content-center">{clase.detalle}</Card.Title>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center" >
              <FontAwesomeIcon icon={faClock} className="cardBody px-1"/> {clase.hora}
              </Card.Text>
              <Card.Text className="cardBody d-flex justify-content-center text-white align-items-center">
              <FontAwesomeIcon icon={faCalendarDays} className="cardBody px-1"/>{clase.fecha}
              </Card.Text>
              <Card.Link className="cardBody d-flex justify-content-center text-white text-decoration-none">
              PROFE: {clase.profesor}
              </Card.Link>
            </Card.Body>
          </Card>
          </Col>
          </>
          ))}
      </Row>
    )}
    </>
  );
};

export default Cards;
