import { Container, Row, Col } from 'react-bootstrap'
import FormService from "../../components/formservice/FormService"
import PaginationService from "../../components/pagination/PaginationServices"


const ViewAdminServices = () => {
    return (
        <>
            <h1 className='color-letras text-center py-3'>ADMINISTRACION DE SERVICIOS</h1>
            <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '66vh' }}>
                <Row>
                    <Col>
                        <FormService />
                    </Col>
                    <Row>
                    <Col>
                        <PaginationService />
                    </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}

export default ViewAdminServices