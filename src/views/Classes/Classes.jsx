import Cards from '../../components/cards/Cards'
import { Container } from 'react-bootstrap'

const Classes = () => {
  return (
    <>
    <Container fluid style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>
    <Cards/>
    </Container>
    </>
  )
}

export default Classes