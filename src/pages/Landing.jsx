import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar_AE from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import logo from '../assets/Logo.png';
import aeyeLogo from '../assets/AEyeSecurityLogo.png';
import './Main.scss';

function Landing() {
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

      <section className="hero-section-main" id="home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content-main fade-in-main">
              <h1 className="hero-title-main">
                Seguridad inteligente para barrios privados
              </h1>
              <p className="hero-subtitle-main">
                Conocé Salus I, el robot patrullero autónomo de A-Eye diseñado para mejorar la cobertura, la trazabilidad y la capacidad de respuesta.
              </p>
              <div className="hero-buttons-main">
                <Button
                  className="btn-primary-custom-main"
                  onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Conocer Salus I
                </Button>
                <Button
                  className="btn-secondary-custom-main"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contáctanos
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-main slide-in-main">
              <div className="hero-visual-main">
                <img src={logo} alt="A-Eye Technology" className="hero-logo-main" />
                <p className="hero-tagline-main">
                  La seguridad del futuro empieza hoy
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="video-section-main" id="video">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="section-title-main fade-in-main">Mirá cómo funciona Salus I</h2>
              <p className="section-subtitle-main fade-in-main">
                Un espacio listo para mostrar la demo del robot patrullero autónomo en acción, con una presentación clara y profesional.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="video-card-main fade-in-main">
                <div className="video-frame-main">
                  <div className="video-overlay-main">
                    <div className="video-play-main" aria-hidden="true">
                      ▶
                    </div>
                    <div className="video-copy-main">
                      <span className="video-badge-main">Preview disponible próximamente</span>
                      <h3>Demo visual de Salus I</h3>
                      <p>
                        Acá vamos a poder mostrar un fragmento del video, una miniatura con poster o un embed de YouTube sin cambiar la estructura de la landing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="video-actions-main">
                  <Button
                    className="btn-primary-custom-main"
                    onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Modelo de suscripción
                  </Button>
                  <Button
                    className="btn-secondary-custom-main video-secondary-main"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Características
                  </Button>
                  <Button
                    className="btn-tertiary-custom-main"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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

      <section className="process-section-main" id="process">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-main fade-in-main">Robot as a Service: acceso simple a una solución de alto impacto</h2>
              <p className="section-subtitle-main fade-in-main">
                Incorporá Salus 1 bajo una modalidad leasing / RaaS, con una mensualidad desde USD 950 por unidad.
                A-Eye acompaña la implementación, el soporte técnico y la continuidad operativa para que la solución se mantenga funcional durante toda la vigencia contractual.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">$</div>
                <h4>Desde USD 950 / mes por unidad</h4>
                <p>Acceso a patrullaje autónomo bajo un modelo comercial previsible y escalable.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main support-plus-main">+</div>
                <h4>Soporte técnico y continuidad operativa</h4>
                <p>Nos encargamos del acompañamiento técnico para sostener la operación del sistema.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">4</div>
                <h4>Renovación tecnológica estimada cada 4 años</h4>
                <p>El modelo puede contemplar actualización o recambio de unidad según condiciones contractuales.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="process-card-main fade-in-main">
                <div className="process-number-main">✓</div>
                <h4>Opción de adquisición al finalizar el contrato</h4>
                <p>Además del esquema de suscripción, puede contemplarse una instancia de compra.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="raas-includes-main fade-in-main">
                <h3>Incluye</h3>
                <div className="raas-includes-grid-main">
                  <div className="raas-include-item-main">Robot patrullero autónomo</div>
                  <div className="raas-include-item-main">Instalación y puesta en marcha</div>
                  <div className="raas-include-item-main">Capacitación inicial</div>
                  <div className="raas-include-item-main">Software e inteligencia artificial</div>
                  <div className="raas-include-item-main">Generación de alertas</div>
                  <div className="raas-include-item-main">Integración con monitoreo existente</div>
                  <div className="raas-include-item-main raas-include-item-wide-main">Soporte técnico y mantenimiento durante la vigencia contractual</div>
                </div>
                <div className="raas-actions-main">
                  <Button
                    className="btn-secondary-custom-main raas-secondary-main"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Características técnicas
                  </Button>
                  <Button
                    className="btn-tertiary-custom-main"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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

export default Landing;
