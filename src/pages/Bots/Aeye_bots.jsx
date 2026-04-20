import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar_AE from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import aeyeLogo from '../../assets/Logo.png';
import './Aeye_bots.scss';

function AeyeBots() {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in-bots');
    const slideInElements = document.querySelectorAll('.slide-in-bots');

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
    <div className="bots-page">
      <Navbar_AE />
      
      {/* Hero Section - Diseño diferente */}
      <section className="hero-section-bots" id="home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={7} className="hero-content-bots fade-in-bots">
              <Badge bg="warning" text="dark" className="hero-badge-bots mb-3">
                🤖 Desarrollo Personalizado
              </Badge>
              <h1 className="hero-title-bots">
                Bots Inteligentes A Medida
              </h1>
              <p className="hero-subtitle-bots">
                Creamos bots personalizados que se adaptan perfectamente a tus necesidades específicas. 
                Desde atención al cliente hasta automatización de procesos complejos, 
                cada bot es diseñado exclusivamente para tu empresa.
              </p>
              <div className="hero-stats-bots">
                <div className="stat-item-bots">
                  <span className="stat-number-bots">50+</span>
                  <span className="stat-label-bots">Bots Creados</span>
                </div>
                <div className="stat-item-bots">
                  <span className="stat-number-bots">24/7</span>
                  <span className="stat-label-bots">Disponibilidad</span>
                </div>
                <div className="stat-item-bots">
                  <span className="stat-number-bots">95%</span>
                  <span className="stat-label-bots">Satisfacción</span>
                </div>
              </div>
              <div className="hero-buttons-bots">
                <Button 
                  className="btn-primary-custom-bots"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Cotización
                </Button>
                <Button 
                  className="btn-secondary-custom-bots"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Servicios
                </Button>
              </div>
            </Col>
            <Col lg={5} className="hero-image-bots slide-in-bots">
              <div className="hero-visual-bots">
                <div className="floating-card-bots card-1-bots">
                  <div className="card-icon-bots">💬</div>
                  <div className="card-text-bots">ChatBot</div>
                </div>
                <div className="floating-card-bots card-2-bots">
                  <div className="card-icon-bots">🤖</div>
                  <div className="card-text-bots">IA</div>
                </div>
                <div className="floating-card-bots card-3-bots">
                  <div className="card-icon-bots">⚡</div>
                  <div className="card-text-bots">Tiempo Real</div>
                </div>
                <img src={aeyeLogo} alt="A-Eye Bots" className="hero-logo-bots" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section - Diseño de tarjetas horizontales */}
      <section className="services-section-bots" id="services">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-bots fade-in-bots">Nuestros Servicios de Bots</h2>
              <p className="section-subtitle-bots fade-in-bots">
                Soluciones personalizadas para cada necesidad empresarial
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={6}>
              <div className="service-card-horizontal-bots fade-in-bots">
                <div className="service-icon-bots">💬</div>
                <div className="service-content-bots">
                  <h3>ChatBots Inteligentes</h3>
                  <p>Bots conversacionales que manejan atención al cliente, ventas y soporte técnico con IA avanzada.</p>
                  <div className="service-features-bots">
                    <span className="feature-tag-bots">WhatsApp</span>
                    <span className="feature-tag-bots">Telegram</span>
                    <span className="feature-tag-bots">Web</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="service-card-horizontal-bots fade-in-bots">
                <div className="service-icon-bots">🤖</div>
                <div className="service-content-bots">
                  <h3>Bots de Automatización</h3>
                  <p>Automatización de tareas repetitivas, procesamiento de datos y gestión de procesos empresariales.</p>
                  <div className="service-features-bots">
                    <span className="feature-tag-bots">RPA</span>
                    <span className="feature-tag-bots">Workflow</span>
                    <span className="feature-tag-bots">API</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="service-card-horizontal-bots fade-in-bots">
                <div className="service-icon-bots">📊</div>
                <div className="service-content-bots">
                  <h3>Bots Analíticos</h3>
                  <p>Análisis de datos en tiempo real, reportes automáticos y dashboards inteligentes personalizados.</p>
                  <div className="service-features-bots">
                    <span className="feature-tag-bots">BI</span>
                    <span className="feature-tag-bots">Reports</span>
                    <span className="feature-tag-bots">ML</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="service-card-horizontal-bots fade-in-bots">
                <div className="service-icon-bots">🛒</div>
                <div className="service-content-bots">
                  <h3>Bots de E-commerce</h3>
                  <p>Gestión de inventarios, procesamiento de pedidos y atención personalizada para tiendas online.</p>
                  <div className="service-features-bots">
                    <span className="feature-tag-bots">Shopify</span>
                    <span className="feature-tag-bots">WooCommerce</span>
                    <span className="feature-tag-bots">MercadoLibre</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section - Diseño de timeline */}
      <section className="process-section-bots">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-bots fade-in-bots">Nuestro Proceso de Desarrollo</h2>
              <p className="section-subtitle-bots fade-in-bots">
                Metodología ágil para crear tu bot perfecto
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="timeline-bots">
                <div className="timeline-item-bots fade-in-bots">
                  <div className="timeline-marker-bots">1</div>
                  <div className="timeline-content-bots">
                    <h4>Consultoría Inicial</h4>
                    <p>Analizamos tus necesidades específicas, objetivos y procesos actuales para diseñar la solución ideal.</p>
                    <div className="timeline-duration-bots">1-2 días</div>
                  </div>
                </div>
                <div className="timeline-item-bots fade-in-bots">
                  <div className="timeline-marker-bots">2</div>
                  <div className="timeline-content-bots">
                    <h4>Diseño y Arquitectura</h4>
                    <p>Creamos la arquitectura técnica, flujos de conversación y especificaciones detalladas del bot.</p>
                    <div className="timeline-duration-bots">3-5 días</div>
                  </div>
                </div>
                <div className="timeline-item-bots fade-in-bots">
                  <div className="timeline-marker-bots">3</div>
                  <div className="timeline-content-bots">
                    <h4>Desarrollo e Integración</h4>
                    <p>Programamos el bot con las mejores tecnologías e integramos con tus sistemas existentes.</p>
                    <div className="timeline-duration-bots">7-14 días</div>
                  </div>
                </div>
                <div className="timeline-item-bots fade-in-bots">
                  <div className="timeline-marker-bots">4</div>
                  <div className="timeline-content-bots">
                    <h4>Pruebas y Optimización</h4>
                    <p>Realizamos pruebas exhaustivas y optimizamos el rendimiento para garantizar la excelencia.</p>
                    <div className="timeline-duration-bots">2-3 días</div>
                  </div>
                </div>
                <div className="timeline-item-bots fade-in-bots">
                  <div className="timeline-marker-bots">5</div>
                  <div className="timeline-content-bots">
                    <h4>Implementación y Soporte</h4>
                    <p>Desplegamos tu bot en producción y brindamos soporte técnico continuo.</p>
                    <div className="timeline-duration-bots">1 día + continuo</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies Section - Diseño de grid */}
      <section className="technologies-section-bots">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-bots fade-in-bots">Tecnologías que Utilizamos</h2>
              <p className="section-subtitle-bots fade-in-bots">
                Stack tecnológico de vanguardia para bots de alta calidad
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">🤖</div>
                <h4>OpenAI GPT</h4>
                <p>IA conversacional avanzada</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">🐍</div>
                <h4>Python</h4>
                <p>Lógica de procesamiento</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">☁️</div>
                <h4>Cloud Services</h4>
                <p>Escalabilidad garantizada</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">🔗</div>
                <h4>APIs</h4>
                <p>Integración completa</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">📱</div>
                <h4>WhatsApp API</h4>
                <p>Comunicación directa</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">🗄️</div>
                <h4>Bases de Datos</h4>
                <p>Almacenamiento seguro</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">🔒</div>
                <h4>Seguridad</h4>
                <p>Protección de datos</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="tech-card-bots fade-in-bots">
                <div className="tech-icon-bots">⚡</div>
                <h4>Rendimiento</h4>
                <p>Optimización continua</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section - Diseño de tarjetas de precios */}
      <section className="pricing-section-bots">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-bots fade-in-bots">Planes de Desarrollo</h2>
              <p className="section-subtitle-bots fade-in-bots">
                Estructura de precios transparente para bots personalizados
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4}>
              <div className="pricing-card-bots fade-in-bots">
                <div className="pricing-header-bots">
                  <h3>Desarrollo Base</h3>
                  <div className="price-bots">USD 400</div>
                  <p>Funcionalidades estándar incluidas</p>
                </div>
                <div className="pricing-features-bots">
                  <div className="feature-bots">✅ Bot conversacional básico</div>
                  <div className="feature-bots">✅ Interfaz de usuario</div>
                  <div className="feature-bots">✅ Respuestas automáticas</div>
                  <div className="feature-bots">✅ Integración básica</div>
                  <div className="feature-bots">✅ Soporte técnico inicial</div>
                  <div className="feature-bots">✅ Tiempo: 5-7 días</div>
                </div>
                <Button 
                  className="btn-primary-custom-bots w-100"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Desarrollo
                </Button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-card-bots featured-bots fade-in-bots">
                <div className="pricing-badge-bots">Más Popular</div>
                <div className="pricing-header-bots">
                  <h3>Desarrollo Avanzado</h3>
                  <div className="price-bots">USD 550</div>
                  <p>Bot con funcionalidad adicional</p>
                </div>
                <div className="pricing-features-bots">
                  <div className="feature-bots">✅ Todo del plan base</div>
                  <div className="feature-bots">✅ +1 Funcionalidad adicional</div>
                  <div className="feature-bots">✅ IA avanzada integrada</div>
                  <div className="feature-bots">✅ Procesamiento complejo</div>
                  <div className="feature-bots">✅ Múltiples integraciones</div>
                  <div className="feature-bots">✅ Tiempo: 10-14 días</div>
                </div>
                <Button 
                  className="btn-primary-custom-bots w-100"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Desarrollo
                </Button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="pricing-card-bots fade-in-bots">
                <div className="pricing-header-bots">
                  <h3>Desarrollo Enterprise</h3>
                  <div className="price-bots">Personalizado</div>
                  <p>Solución completa a medida</p>
                </div>
                <div className="pricing-features-bots">
                  <div className="feature-bots">✅ Múltiples funcionalidades</div>
                  <div className="feature-bots">✅ Integración con sistemas</div>
                  <div className="feature-bots">✅ IA de última generación</div>
                  <div className="feature-bots">✅ Reportes automáticos</div>
                  <div className="feature-bots">✅ Escalabilidad garantizada</div>
                  <div className="feature-bots">✅ Tiempo: Según complejidad</div>
                </div>
                <Button 
                  className="btn-primary-custom-bots w-100"
                  href="https://wa.link/7wp1uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar para Consulta
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section-bots">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="cta-content-bots fade-in-bots">
                <h2>¿Listo para automatizar tu negocio?</h2>
                <p>
                  Únete a empresas que ya confían en A-Eye para crear bots inteligentes que transforman sus procesos
                </p>
                <div className="cta-buttons-bots">
                  <Button 
                    className="btn-primary-custom-bots btn-large-bots"
                    href="https://wa.link/7wp1uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Consulta Gratuita
                  </Button>
                  <Link to="/">
                    <Button className="btn-secondary-custom-bots btn-large-bots">
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

export default AeyeBots;
