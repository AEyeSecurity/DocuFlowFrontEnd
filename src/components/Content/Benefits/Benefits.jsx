import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImgOverlay } from 'react-bootstrap';
import Benefit1 from '../../../assets/benefit1.jpg';
import Benefit2 from '../../../assets/benefit2.jpg';
import Benefit3 from '../../../assets/benefit3.jpg';
import Benefit4 from '../../../assets/benefit4.jpg';
import './Benefits.scss';

function Benefits() {
  const [activeCard, setActiveCard] = useState(null);

  const handleTouch = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <Container
      style={{ marginTop: "4rem", marginBottom: "6rem" }}
      className="text-center"
    >
      <Row>
        <h1
          style={{
            marginBottom: "2rem",
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Beneficios Principales
        </h1>
      </Row>
      <Row className="justify-content-center">
        {[Benefit1, Benefit2, Benefit3, Benefit4].map((benefit, index) => (
          <Col
            key={index}
            xl={3}
            lg={4}
            md={6}
            sm={12}
            className="mb-4"
          >
            <Card
              className={`benefits ${activeCard === index ? "active" : ""}`}
              style={{ width: '100%' }}
              onTouchStart={() => handleTouch(index)}
            >
              <Card.Img
                variant="top"
                src={benefit}
                style={{
                  borderRadius: "0px",
                  objectFit: "cover",
                  height: "20rem",
                }}
              />
              <CardImgOverlay className="benefit-card-overlay">
                <div className="benefit-card-div">
                  <Card.Title
                    style={{ fontSize: "1.2rem" }}
                    className="benefit-card-title"
                  >
                    {index === 0 && "Seguridad optimizada"}
                    {index === 1 && "Menos falsas alarmas"}
                    {index === 2 && "Comunicación inmediata"}
                    {index === 3 && "Instalación profesional"}
                  </Card.Title>
                  <Card.Text className="benefit-card-text">
                    {index === 0 &&
                      "Con nuestra IA, podrás detectar y reconocer cualquier movimiento en tu hogar o negocio."}
                    {index === 1 &&
                      "Gracias a nuestra IA, podrás distinguir entre objetos, animales y personas, reduciendo las falsas alarmas."}
                    {index === 2 &&
                      "Gracias a nuestro programa, recibirás alertas instantáneas por WhatsApp en caso de detectar algo sospechoso."}
                    {index === 3 &&
                      "Nuestro equipo de expertos se encargará de la instalación y configuración, asegurando un funcionamiento óptimo."}
                  </Card.Text>
                </div>
              </CardImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Benefits;