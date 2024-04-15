import { Container, Row, Col } from 'react-bootstrap'
import FormService from "../../components/formservice/FormService"
import PaginationService from "../../components/pagination/PaginationServices"

const ViewAdminServices = () => {
    return (
        <>
            <h1 className='color-letras text-center py-3'>ADMINISTRACION DE SERVICIOS</h1>
            <Container>
                <Row>
                    <Col>
                        <FormService />
                    </Col>
                    <Col>
                        <PaginationService />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ViewAdminServices