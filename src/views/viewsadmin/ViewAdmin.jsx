import FormClases from "../../components/formclasses/FormClases";
import FormService from "../../components/formservice/FormService"
import PaginationUser from "../../components/pagination/PaginationUser";
import PaginationClasses from "../../components/pagination/PaginationClasses";
import PaginationService from "../../components/pagination/PaginationServices"
import { Row, Col, Container } from "react-bootstrap";
import './admin.css'
const ViewAdmin = () => {
  return (
    <>
      <Container className="color-letras">
        <h1 className="text-center py-3">Administración</h1>
        <Row>
          <Col>
          <PaginationUser/>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormClases/>
          </Col>
          <Col>
            <PaginationClasses />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormService/>
          </Col>
          <Col>
            <PaginationService />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewAdmin;
