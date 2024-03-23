import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './footerStyle.css'

const Footer = () => {
    return (


        <footer>
            <Container className='contenedorFooter'>
                <Row>
                    <Col sm={12} md={6}>
                        <h3 className='text-center textTitle'>Encontranos en</h3>
                        <ul className='listaSocials d-flex justify-content-center'>
                            <a className='mx-5 mt-4' href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} size="2x" className="icono-blanco" /></a>
                            <a className='mx-5 mt-4' href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" className="icono-blanco" /></a>
                            <a className='mx-5 mt-4' href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" className="icono-blanco" /></a>
                        </ul>
                    </Col>
                    <Col className='text-center' sm={12} md={6}>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="icono-blanco" /> Dirección: Gral Paz 1234</p>
                        <p><FontAwesomeIcon icon={faEnvelope} size="1x" className="icono-blanco" /> Email: contacto@htmliftgym.com</p>
                        <p><FontAwesomeIcon icon={faPhone} size="1x" className="icono-blanco" /> Teléfono: +54 381 567 8900</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;