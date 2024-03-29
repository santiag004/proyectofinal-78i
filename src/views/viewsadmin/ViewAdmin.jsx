import FormClases from "../../components/formclasses/FormClases";
import FormService from "../../components/formservice/FormServise"
import PaginationUser from "../../components/pagination/PaginationUser";
import PaginationClasses from "../../components/pagination/PaginationClasses";
import PaginationService from "../../components/pagination/PaginationServices"
import { Row, Col, Container } from "react-bootstrap";
const ViewAdmin = () => {
  return (
    <>
      <Container>
        <h1>View Admin</h1>
        {/* <PaginationUser />
        <Row>
          <Col>
            <FormClases />
          </Col>
          <Col>
            <PaginationClasses />
          </Col>
        </Row> */}
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
