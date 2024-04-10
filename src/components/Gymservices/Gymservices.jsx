import ServicesCarousel from '../ServicesCarousel/ServicesCarousel'
import './Gymservices.css'
import { Container, Row, Col } from 'react-bootstrap'

const Gymservices = () => {
    return (
        <>
            <Container className="data-container mt-3">
                <Row>
                <h1 className='title-text'>BIENVENIDO A HTMLIFT!</h1>
                <p>Pegale un vistazo a nuestros servicios más destacados:</p>
                    <Col lg={8} md={12}>
                <div className="service-info">
                    <h3 className='service-name'>CROSSFIT</h3>
                    <ul>
                        <li>Desafíate con nuestros entrenamientos intensos y dirigidos por expertos.</li>
                        <li>Aptos para todos los niveles, desde principiantes hasta atletas experimentados.</li>
                        <li>Únete a una comunidad comprometida que te ayudará a superarte.</li>
                    </ul>
                </div>

                <div className="service-info">
                    <h3 className='service-name'>MÁQUINAS DE ALTA CALIDAD:</h3>
                    <ul>
                        <li>Disfruta de una amplia gama de equipos de fitness de última generación.</li>
                        <li>Seguros, cómodos y diseñados para optimizar tu entrenamiento.</li>
                        <li>Nuestro personal está siempre disponible para ayudarte con el uso adecuado de cada máquina.</li>
                    </ul>
                </div>

                <div className="service-info">
                    <h3 className='service-name'>SPA:</h3>
                    <ul>
                        <li>Sumérgete en un oasis de relajación con una variedad de tratamientos rejuvenecedores.</li>
                        <li>Desde masajes terapéuticos hasta tratamientos faciales revitalizantes.</li>
                        <li>Encuentra el equilibrio perfecto entre el bienestar físico y mental.</li>
                    </ul>
                </div>

                <div className="service-info">
                    <h3 className='service-name'>DUCHAS:</h3>
                    <ul>
                        <li>Refréscate y revitalízate en nuestras modernas duchas.</li>
                        <li>Agua caliente y presión adecuada para eliminar la tensión muscular.</li>
                        <li>Disfruta de productos de alta calidad para una experiencia de ducha rejuvenecedora.</li>
                    </ul>
                </div>
                    </Col>

                    <Col className='carousel-col' lg={4} md={12}>
                    <ServicesCarousel/>
                    </Col>
                </Row>
                

            </Container>
        </>
    )
}

export default Gymservices