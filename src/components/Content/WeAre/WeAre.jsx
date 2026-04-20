import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './WeAre.scss';

function WeAre() {
  return (
    <Container className="we-are-container">
      <Col>
        <Row>
          <h1>Somos A-Eye Bionics</h1>
        </Row>
        <Row>
          <h3 style={{ fontWeight: "bold" }}>Seguridad Inteligente para tu Hogar y Negocio</h3>
        </Row>
        <Row>
          <h3>
            La seguridad que piensa por ti: nuestra IA detecta y reconoce
            cualquier movimiento, identificando personas, animales y objetos
            con precisión. ¿Algo sospechoso? Recibirás una alerta por WhatsApp
            en segundos.
          </h3>
        </Row>
        <Row>
          <div>
            <Button
              className="we-are-button"
              href="https://wa.link/7wp1uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocé Más
            </Button>
          </div>
        </Row>
      </Col>
    </Container>
  );
}

export default WeAre;