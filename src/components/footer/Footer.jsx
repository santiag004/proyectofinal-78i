import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './footerStyle.css'

const Footer = () => {
    return (
        <>
            <footer>
                <Container className='contenedorFooter px-0'>
                    <Row className='g-0'>
                        <Col className='text-center d-flex flex-column' sm={12} md={6}>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="icono-blanco" />       Gral Paz 1234</p>
                            <p><FontAwesomeIcon icon={faEnvelope} size="1x" className="icono-blanco" />          contacto@htmliftgym.com</p>
                            <p><FontAwesomeIcon icon={faPhone} size="1x" className="icono-blanco" />             +54 381 567 8900</p>
                        </Col>
                        <Col sm={12} md={6}>
                            <ul className='listaSocials d-flex justify-content-center'>
                                <a className='mx-5 mt-4' target='_blank' href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} size="2x" className="icono-blanco" /></a>
                                <a className='mx-5 mt-4' target='_blank' href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" className="icono-blanco" /></a>
                                <a className='mx-5 mt-4' target='_blank' href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" className="icono-blanco" /></a>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>


        </>
    );
}

export default Footer;