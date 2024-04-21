import Cards from '../../components/cards/Cards'
import { Container } from 'react-bootstrap'

const Classes = () => {
  return (
    <>
    <h1 className='text-center m-3'>CLASES</h1>
    <Container fluid style={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>
    <Cards/>
    </Container>
    </>
  )
}

export default Classes