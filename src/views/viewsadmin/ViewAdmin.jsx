import FormClases from "../../components/formclasses/FormClases";
import PaginationUser from "../../components/pagination/PaginationUser";
import PaginationClasses from "../../components/pagination/PaginationClasses";
import { Row, Col, Container } from "react-bootstrap";
const ViewAdmin = () => {
  return (
    <>
      <Container>
        <h1>View Admin</h1>
        <PaginationUser />
        <Row>
          <Col>
            <FormClases />
          </Col>
          <Col>
            <PaginationClasses />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewAdmin;
