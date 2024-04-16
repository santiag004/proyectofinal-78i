import { Container, Row, Col } from 'react-bootstrap'
import FormClases from '../../components/formclasses/FormClases'
import PaginationClasses from '../../components/pagination/PaginationClasses'


const ViewAdminClasses = () => {
  return (
    <>
      <h1 className='color-letras text-center py-3'>ADMINISTRACION DE CLASES</h1>
      <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '65vh' }}>
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
  )
}

export default ViewAdminClasses