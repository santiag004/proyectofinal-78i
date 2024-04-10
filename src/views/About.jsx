import Aboutus from "../components/Aboutus/Aboutus"
import { Container, Row, Col } from 'react-bootstrap'
import AboutCards from "../components/aboutCards/AboutCards"
import './About.css'

const About = () => {
    return (
        <>
            <Aboutus />
            <Container className="aboutcards-container">
                <Row>
                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Bruno Pieruzzi' phUrl='public\images\bp.jpg' />
                    </Col>

                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Facundo Arebalo' phUrl='public\images\fa.jpg' />
                    </Col>

                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Inés Toledo' phUrl='public\images\it.jpg' />
                        
                    </Col>

                    <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
                        <AboutCards name='Javier Rodriguez' phUrl='public\images\jr.jpg' />
                    </Col>

                    <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Santiago Soraire' phUrl="public\images\ss.jpg" />
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About