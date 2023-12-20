import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="bg-light p-0"> {/* Agrega la clase p-0 para eliminar el relleno */}
            <Row>
                <Col md={4} className="text-center">
                    <h5>Ferreteria</h5>
                </Col>
                <Col md={4} className="text-center">
                    <h5>Enlaces</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca de</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </Col>
                <Col md={4} className="text-center">
                    <h5>Contacto</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Correo electrónico</a></li>
                        <li><a href="#">Teléfono</a></li>
                        <li><a href="#">Dirección</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    <p className="mt-3 mb-3 text-muted">© 2023 - Todos los derechos reservados</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

