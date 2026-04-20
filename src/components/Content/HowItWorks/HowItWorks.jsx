import { React, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HowItWorks.scss';
import Services1 from '../../../assets/Services1.png';
import works2 from '../../../assets/works2.jpg';
import works3 from '../../../assets/works3.jpg';
import works4 from '../../../assets/works4.jpg';

function HowItWorks() {
    useEffect(() => {
        const fadeInHIWElements = document.querySelectorAll('.fade-in-hiw');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -10px 0px',
            }
        );

        fadeInHIWElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <Container className="how-it-works-container">
            <h1 style={{ color: "black", fontWeight: "bold", marginBottom: "4rem" }}>Cómo Funciona</h1>
            <Row className="align-items-center mb-4 fade-in-hiw">
                <Col md={6} className="text-column">
                    <h3>Detección inteligente de movimiento</h3>
                    <p>
                        Nuestro sistema detecta movimiento y clasifica el objeto en movimiento, distinguiendo objetos, animales y personas.
                    </p>
                </Col>
                <Col md={6} className="image-column">
                    <img src={Services1} className="img-fluid" />
                </Col>
            </Row>
            <Row className="align-items-center mb-4 fade-in-hiw">
                <Col md={6} className="image-column">
                    <img src={works2} className="img-fluid" />
                </Col>
                <Col md={6} className="text-column">
                    <h3>Análisis facial</h3>
                    <p>
                        Gracias a la IA integrada, nuestro sistema clasifica las expresiones y características de los sujetos detectados.
                    </p>
                </Col>
            </Row>
            <Row className="align-items-center mb-4 fade-in-hiw">
                <Col md={6} className="text-column">
                    <h3>Alertas por WhatsApp</h3>
                    <p>
                        En caso de ser detectada alguna actividad sospechosa, nuestro asistente de WhatsApp le informará en el momento.
                    </p>
                </Col>
                <Col md={6} className="image-column">
                    <img src={works3} className="img-fluid" />
                </Col>
            </Row>
            <Row className="align-items-center fade-in-hiw">
                <Col md={6} className="image-column">
                    <img src={works4} className="img-fluid" />
                </Col>
                <Col md={6} className="text-column">
                    <h3>Fácil configuración e instalación profesional</h3>
                    <p>
                        Nuestro equipo cuenta con un grupo de instalación y configuración de máxima calidad para que puedas disfrutar de tu sistema de seguridad en el menor tiempo posible.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default HowItWorks;