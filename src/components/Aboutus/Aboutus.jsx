import './Aboutus.css'
import { Container } from 'react-bootstrap'

const Aboutus = () => {
  return (
    <>
    <Container className='data-container mt-3'>
        <h1 className='title-text'>SOBRE NOSOTROS</h1>
        <p className='highlighted'>Somos un grupo de desarrolladores fullstack que busca mejorar en cada proyecto</p>
        <p>El grupo está integrado por:</p>
    </Container>
    </>
  )
}

export default Aboutus