import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './footerStyle.css'

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container className='contenedorFooter'>
        <Row>
          <Col sm={12} md={6}>
            <h3>Redes Sociales</h3>
            <ul className='listaSocials'>
              <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a></li>
              <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
              <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
            </ul>
          </Col>
          <Col sm={12} md={6}>
            <h3>Contacto</h3>
            <p><FontAwesomeIcon icon={faHome} size="2x" /> Dirección: Gral Paz 1234</p>
            <p><FontAwesomeIcon icon={faEnvelope} size="2x" /> Email: contacto@htmliftgym.com</p>
            <p><FontAwesomeIcon icon={faPhone} size="2x" /> Teléfono: +54 381 567 8900</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;