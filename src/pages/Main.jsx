import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar_AE from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import logo from '../assets/Logo.png';
import aeyeLogo from '../assets/AEyeSecurityLogo.png';
import './Main.scss';

function Main() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in-main');
    const slideInElements = document.querySelectorAll('.slide-in-main');

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
    <div className="main-page">
      <Navbar_AE />
      
      {/* Hero Section */}
      <section className="hero-section-main" id="home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content-main fade-in-main">
              <h1 className="hero-title-main">
                Soluciones Tecnológicas con A-Eye
              </h1>
              <p className="hero-subtitle-main">
                Transformamos tu negocio con robótica aplicada, automatización inteligente 
                y agentes IA que optimizan cada proceso. El futuro de la tecnología está aquí.
              </p>
              <div className="hero-buttons-main">
                <Button 
                  className="btn-primary-custom-main"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar Soluciones
                </Button>
                <Button 
                  className="btn-secondary-custom-main"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Servicios
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-main slide-in-main">
              <img src={logo} alt="A-Eye Technology" className="hero-logo-main" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section-main" id="services">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-main fade-in-main">Nuestras Soluciones</h2>
              <p className="section-subtitle-main fade-in-main">
                Tecnología de vanguardia para cada necesidad empresarial
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={4}>
              <Card className="service-card-main fade-in-main">
                <Card.Body className="text-center">
                  <div className="service-icon-main">🔒</div>
                  <Card.Title>Seguridad Automatizada</Card.Title>
                  <Card.Text>
                    Sistemas de vigilancia inteligente con IA que detectan, reconocen y alertan 
                    en tiempo real sobre actividades sospechosas.
                  </Card.Text>
                  <Link to="/security">
                    <Button className="btn-primary-custom-main">
                      Conocer Más
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4}>
              <Card className="service-card-main fade-in-main">
                <Card.Body className="text-center">
                  <div className="service-icon-main">🤖</div>
                  <Card.Title>Robótica Aplicada</Card.Title>
                  <Card.Text>
                    Robots de patrullaje para seguridad privada, drones personalizados y robots a medida, adaptados a tus necesidades.
                  </Card.Text>
                  <Link to="/robotics">
                    <Button className="btn-primary-custom-main">
                      Conocer Más
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4}>
              <Card className="service-card-main fade-in-main">
                <Card.Body className="text-center">
                  <div className="service-icon-main">🎯</div>
                  <Card.Title>Agentes Inteligentes</Card.Title>
                  <Card.Text>
                    Bots especializados que gestionan tareas complejas, atención al cliente 
                    y análisis de datos en tiempo real.
                  </Card.Text>
                  <Link to="/agents">
                    <Button className="btn-primary-custom-main">
                      Conocer Más
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section-main" id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="fade-in-main">
              <h2 className="section-title-main">¿Por qué A-Eye?</h2>
              <p className="section-subtitle-main">
                Somos pioneros en la aplicación práctica de tecnologías emergentes. 
                Nuestro equipo combina años de experiencia en IA, robótica y automatización 
                para crear soluciones que realmente funcionan.
              </p>
              <div className="feature-list-main">
                <div className="feature-item-main">
                  <span className="feature-icon-main">✅</span>
                  <span>Experiencia comprobada en más de 50 proyectos</span>
                </div>
                <div className="feature-item-main">
                  <span className="feature-icon-main">✅</span>
                  <span>Tecnología de última generación</span>
                </div>
                <div className="feature-item-main">
                  <span className="feature-icon-main">✅</span>
                  <span>Soporte técnico especializado 24/7</span>
                </div>
                <div className="feature-item-main">
                  <span className="feature-icon-main">✅</span>
                  <span>ROI medible y seguimiento continuo de resultados</span>
                </div>
              </div>
            </Col>
            <Col lg={6} className="slide-in-main">
              <img src={aeyeLogo} alt="A-Eye Technology" className="about-image-main" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section-main" id="process">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-main fade-in-main">Nuestro Proceso</h2>
              <p className="section-subtitle-main fade-in-main">
                Metodología probada para implementar soluciones exitosas
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">1</div>
                <h4>Diagnóstico</h4>
                <p>Analizamos tus necesidades específicas y objetivos empresariales</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">2</div>
                <h4>Diseño</h4>
                <p>Creamos una solución personalizada que se adapta a tu infraestructura</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">3</div>
                <h4>Implementación</h4>
                <p>Desplegamos la solución con mínima interrupción de tus operaciones</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">4</div>
                <h4>Seguimiento</h4>
                <p>Monitoreamos y optimizamos continuamente para máximo rendimiento</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="industries-section-main">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-main fade-in-main">Industrias que Transformamos</h2>
              <p className="section-subtitle-main fade-in-main">
                Soluciones adaptadas para cada sector empresarial
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🏭</div>
                <h4>Manufactura</h4>
                <p>Automatización de líneas de producción, control de calidad IA y mantenimiento predictivo</p>
                </div>
            </Col>
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🏥</div>
                <h4>Salud</h4>
                <p>Monitoreo inteligente de pacientes, gestión de inventarios y asistencia médica automatizada</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🏪</div>
                <h4>Retail</h4>
                <p>Análisis de comportamiento del cliente, gestión de inventarios y seguridad avanzada</p>
                </div>
            </Col>
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🏢</div>
                <h4>Oficinas</h4>
                <p>Automatización de procesos administrativos, gestión inteligente de espacios y seguridad</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🏠</div>
                <h4>Residencial</h4>
                <p>Domótica inteligente, seguridad automatizada y gestión energética optimizada</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="industry-card-main fade-in-main">
                <div className="industry-icon-main">🚛</div>
                <h4>Logística</h4>
                <p>Gestión de flotas inteligente, optimización de rutas y automatización de almacenes</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section-main">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="cta-content-main fade-in-main">
                <h2>¿Listo para transformar tu negocio?</h2>
                <p>
                  Únete a empresas líderes que ya confían en A-Eye para su transformación digital
                </p>
                <Button 
                  className="btn-primary-custom-main btn-large-main"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Consulta Gratuita
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default Main;
