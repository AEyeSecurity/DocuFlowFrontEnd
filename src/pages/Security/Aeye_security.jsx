import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar_AE from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Aeye_security.scss';

function AeyeSecurity() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in-security');
    const slideInElements = document.querySelectorAll('.slide-in-security');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeInElements.forEach((el) => observer.observe(el));
    slideInElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="security-page">
      <Navbar_AE />
      
      {/* Hero Section */}
      <section className="hero-section-security" id="home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content-security fade-in-security">
              <h1 className="hero-title-security">
                Seguridad Inteligente con A-Eye
              </h1>
              <p className="hero-subtitle-security">
                La revolución en seguridad doméstica y empresarial. Nuestra IA detecta, 
                reconoce y alerta en tiempo real sobre cualquier actividad sospechosa.
              </p>
              <div className="hero-buttons-security">
                <Button 
                  className="btn-primary-custom-security"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Demo
                </Button>
                <Button 
                  className="btn-secondary-custom-security"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                >
                  Conocer Más
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-security slide-in-security">
              <div className="hero-visual-security">
                <div className="security-shield">
                  <div className="shield-icon">🛡️</div>
                  <div className="shield-text">A-Eye Security</div>
                </div>
                <div className="floating-elements">
                  <div className="element element-1">🔒</div>
                  <div className="element element-2">📱</div>
                  <div className="element element-3">⚡</div>
                  <div className="element element-4">🤖</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section-security" id="features">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-security fade-in-security">¿Por qué elegir A-Eye Security?</h2>
              <p className="section-subtitle-security fade-in-security">
                Tecnología de vanguardia que protege lo que más importa
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} lg={4}>
              <Card className="feature-card-security fade-in-security">
                <Card.Body className="text-center">
                  <div className="feature-icon-security">🤖</div>
                  <Card.Title>IA Avanzada</Card.Title>
                  <Card.Text>
                    Reconocimiento inteligente de personas, animales y objetos con precisión del 99.9%
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4}>
              <Card className="feature-card-security fade-in-security">
                <Card.Body className="text-center">
                  <div className="feature-icon-security">⚡</div>
                  <Card.Title>Tiempo Real</Card.Title>
                  <Card.Text>
                    Alertas instantáneas por WhatsApp en menos de 3 segundos
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4}>
              <Card className="feature-card-security fade-in-security">
                <Card.Body className="text-center">
                  <div className="feature-icon-security">🔒</div>
                  <Card.Title>Privacidad Total</Card.Title>
                  <Card.Text>
                    Tus datos se procesan localmente, sin almacenamiento en la nube
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section-security">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-security fade-in-security">Cómo Funciona</h2>
              <p className="section-subtitle-security fade-in-security">
                Tres pasos simples para tu seguridad
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <div className="step-card-security fade-in-security">
                <div className="step-number-security">1</div>
                <div className="step-text-security">
                  <h4>Instalación</h4>
                  <p>Conecta tu cámara existente o instalamos una nueva en menos de 30 minutos</p>
                </div>
                <div className="step-visual-security">
                  <div className="visual-icon">📹</div>
                  <div className="visual-line"></div>
                  <div className="visual-dot"></div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card-security fade-in-security">
                <div className="step-number-security">2</div>
                <div className="step-text-security">
                  <h4>Configuración</h4>
                  <p>Nuestra IA aprende los patrones normales de tu propiedad en 24 horas</p>
                </div>
                <div className="step-visual-security">
                  <div className="visual-icon">🧠</div>
                  <div className="visual-line"></div>
                  <div className="visual-dot"></div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="step-card-security fade-in-security">
                <div className="step-number-security">3</div>
                <div className="step-text-security">
                  <h4>Protección</h4>
                  <p>Recibe alertas inteligentes solo cuando detecte actividad sospechosa</p>
                </div>
                <div className="step-visual-security">
                  <div className="visual-icon">🛡️</div>
                  <div className="visual-line"></div>
                  <div className="visual-dot"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section-security" id="benefits">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-security fade-in-security">Beneficios Principales</h2>
              <p className="section-subtitle-security fade-in-security">
                Descubre cómo A-Eye transforma tu seguridad
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={6}>
              <div className="benefit-item-security fade-in-security">
                <div className="benefit-icon-security">🕐</div>
                <div className="benefit-content-security">
                  <h4>Seguridad 24/7</h4>
                  <p>Monitoreo continuo sin interrupciones, incluso cuando no estás en casa</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="benefit-item-security fade-in-security">
                <div className="benefit-icon-security">🔔</div>
                <div className="benefit-content-security">
                  <h4>Alertas Inteligentes</h4>
                  <p>No más falsas alarmas. Solo recibes notificaciones cuando realmente importa</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="benefit-item-security fade-in-security">
                <div className="benefit-icon-security">🔗</div>
                <div className="benefit-content-security">
                  <h4>Fácil Integración</h4>
                  <p>Compatible con la mayoría de cámaras existentes del mercado</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="benefit-item-security fade-in-security">
                <div className="benefit-icon-security">💸</div>
                <div className="benefit-content-security">
                  <h4>Ahorro de Costos</h4>
                  <p>Elimina la necesidad de servicios de monitoreo costosos</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="applications-section-security">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-security fade-in-security">Aplicaciones</h2>
              <p className="section-subtitle-security fade-in-security">
                Protección inteligente para cualquier espacio
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🏠</div>
                <h4>Hogares</h4>
                <p>Protege tu familia y bienes con vigilancia inteligente las 24 horas</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🏢</div>
                <h4>Oficinas</h4>
                <p>Monitoreo de accesos y áreas sensibles con alertas inmediatas</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🏪</div>
                <h4>Comercios</h4>
                <p>Prevención de robos y control de inventario en tiempo real</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🏭</div>
                <h4>Industrias</h4>
                <p>Seguridad perimetral y control de acceso a áreas restringidas</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🚛</div>
                <h4>Logística</h4>
                <p>Monitoreo de flotas y protección de almacenes</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="application-card-security fade-in-security">
                <div className="application-icon-security">🏥</div>
                <h4>Salud</h4>
                <p>Control de acceso y monitoreo de áreas críticas en hospitales</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section-security">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="cta-content-security fade-in-security">
                <h2>¿Listo para proteger lo que más importa?</h2>
                <p>
                  Únete a cientos de familias y empresas que ya confían en A-Eye para su seguridad
                </p>
                <div className="cta-buttons-security">
                  <Button 
                    className="btn-primary-custom-security btn-large-security"
                    href="https://wa.link/7wp1uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Consulta Gratuita
                  </Button>
                  <Link to="/">
                    <Button className="btn-secondary-custom-security btn-large-security">
                      Volver al Inicio
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default AeyeSecurity;
