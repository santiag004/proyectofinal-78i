import Aboutus from "../../components/Aboutus/Aboutus"
import { Container, Row, Col } from 'react-bootstrap'
import AboutCards from "../../components/aboutCards/AboutCards"
import './About.css'

const About = () => {
    return (
        <>
            <Aboutus />
            <Container className="aboutcards-container">
                <Row>
                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Bruno Pieruzzi' phUrl='\images\bp.jpg' />
                    </Col>

                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Facundo Arebalo' phUrl='\images\fa.jpg' />
                    </Col>

                    <Col lg={4} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Inés Toledo' phUrl='\images\it.jpg' />
                        
                    </Col>

                    <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
                        <AboutCards name='Javier Rodriguez' phUrl='\images\jr.jpg' />
                    </Col>

                    <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
                    <AboutCards name='Santiago Soraire' phUrl="\images\ss.jpg" />
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About