import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiCheckCircle, FiClock, FiCpu, FiCreditCard, FiDatabase, FiFilePlus, FiFileText, FiGitBranch, FiLayers, FiMapPin, FiMessageCircle, FiTool, FiTrendingUp, FiTruck, FiZap } from 'react-icons/fi';
import Navbar_AE from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import avatar from '../../DocuFlowImages/Avatar.png';
import flowImage from '../../DocuFlowImages/Flow.png';
import './Main.scss';

function LandingV2() {
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
              <h1 className="hero-title-main">Carga documentos por WhatsApp con IA</h1>
              <p className="hero-subtitle-main">
                DocuFlow automatiza la carga de remitos, facturas y cheques para que tu equipo deje de perder horas en tareas manuales.
              </p>
              <div className="hero-buttons-main">
                <Button className="btn-primary-custom-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </Button>
                <Button className="btn-secondary-custom-main" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                  Ver como funciona
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image-main slide-in-main">
              <div className="hero-visual-main">
                <img src={avatar} alt="Avatar de Docuflow" className="hero-logo-main" />
                <p className="hero-tagline-main">Del papel a la nube</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-it-works-section-main" id="how-it-works">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="section-title-main fade-in-main">Asi funciona DocuFlow</h2>
              <p className="section-subtitle-main fade-in-main">
                Un flujo simple para automatizar la carga de documentos sin cambiar toda tu operacion.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="how-it-works-card-main fade-in-main">
                <div className="how-it-works-image-shell-main slide-in-main">
                  <img
                    src={flowImage}
                    alt="Flujo de funcionamiento de DocuFlow por WhatsApp"
                    className="how-it-works-image-main"
                  />
                </div>
                <div className="how-it-works-copy-main fade-in-main">
                  <p>
                    DocuFlow transforma un proceso lento y repetitivo en una carga simple, rapida y lista para auditar.
                  </p>
                </div>
                <div className="how-it-works-actions-main">
                  <Button className="btn-primary-custom-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </Button>
                  <Button className="btn-secondary-custom-main how-it-works-secondary-main" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Probar DocuFlow
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section-main" id="about">
        <Container>
          <Row className="text-center mb-4">
            <Col className="fade-in-main">
              <h2 className="section-title-main">Menos carga manual. Mas tiempo para tu operacion.</h2>
              <p className="section-subtitle-main">
                DocuFlow automatiza la carga de documentos de forma simple, rapida y sin cambiar tu forma de trabajar.
              </p>
            </Col>
          </Row>
          <Row className="g-3">
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiMessageCircle /></div>
                  <h4>Carga por WhatsApp</h4>
                </div>
                <p>Carga documentos desde un canal que tu equipo ya usa todos los dias.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiCpu /></div>
                  <h4>Lectura con IA</h4>
                </div>
                <p>Detecta automaticamente los datos clave para acelerar la carga.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiClock /></div>
                  <h4>Menos horas administrativas</h4>
                </div>
                <p>Reduce tareas repetitivas y pasa de tipear a auditar.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiZap /></div>
                  <h4>Implementacion en 1 dia</h4>
                </div>
                <p>Empeza rapido, sin proyectos largos ni complejos.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiGitBranch /></div>
                  <h4>Primer paso a la automatizacion</h4>
                </div>
                <p>Resolve un cuello de botella concreto sin complicar tu operacion.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card-detail-main fade-in-main">
                <div className="feature-card-head-main">
                  <div className="feature-card-icon-main"><FiDatabase /></div>
                  <h4>Listo para crecer</h4>
                </div>
                <p>Empeza simple y expandi el flujo cuando tu empresa lo necesite.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="feature-closing-main fade-in-main">
                <p>DocuFlow resuelve un problema real: el tiempo que hoy se pierde cargando documentos a mano.</p>
                <div className="feature-actions-main">
                  <Button className="btn-primary-custom-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </Button>
                  <Button className="btn-secondary-custom-main feature-secondary-main" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Probar DocuFlow
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="process-section-main" id="process">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="section-title-main fade-in-main">Simple para empezar. Flexible para crecer.</h2>
              <p className="section-subtitle-main fade-in-main">
                DocuFlow esta pensado para que puedas automatizar un flujo puntual desde el primer dia y expandirlo solo si tu operacion lo necesita.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3}><div className="process-card-main fade-in-main"><div className="process-number-main"><FiCreditCard /></div><h4>Plan Base</h4><p><strong>USD 70/mes</strong><br />Incluye 1 tipo de documento, carga por WhatsApp, validacion de datos y registro automatico en Google Sheets.</p></div></Col>
            <Col md={3}><div className="process-card-main fade-in-main"><div className="process-number-main"><FiZap /></div><h4>Implementacion rapida</h4><p>Tu flujo puede quedar operativo en 1 dia, sin proyectos largos ni cambios complejos en tu operacion.</p></div></Col>
            <Col md={3}><div className="process-card-main fade-in-main"><div className="process-number-main"><FiFilePlus /></div><h4>Suma mas documentos</h4><p>Podes agregar otros tipos de documento del catalogo por un costo mensual adicional.</p></div></Col>
            <Col md={3}><div className="process-card-main fade-in-main"><div className="process-number-main"><FiLayers /></div><h4>Crece cuando lo necesites</h4><p>Si tu empresa necesita mas automatizacion, DocuFlow puede ser el punto de partida para nuevos flujos o desarrollos puntuales.</p></div></Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="raas-includes-main fade-in-main">
                <h3>Incluye</h3>
                <div className="raas-includes-grid-main">
                  <div className="raas-include-item-main"><FiCheckCircle />Implementacion inicial</div>
                  <div className="raas-include-item-main"><FiCheckCircle />Primer mes gratis</div>
                  <div className="raas-include-item-main"><FiCheckCircle />1 tipo de documento</div>
                  <div className="raas-include-item-main"><FiCheckCircle />Carga por WhatsApp</div>
                  <div className="raas-include-item-main"><FiCheckCircle />Validacion antes del registro</div>
                  <div className="raas-include-item-main"><FiCheckCircle />Registro automatico en Google Sheets</div>
                </div>
                <p className="raas-note-main">Necesitas otro documento o un flujo mas especifico? Podemos ampliar DocuFlow segun la necesidad de tu operacion.</p>
                <div className="raas-actions-main">
                  <Button className="btn-primary-custom-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </Button>
                  <Button className="btn-secondary-custom-main raas-secondary-main" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Consultar mi caso
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
              <h2 className="section-title-main fade-in-main">Donde puede ayudarte DocuFlow</h2>
              <p className="section-subtitle-main fade-in-main">Empresas con carga documental repetitiva, operacion en calle o muchas horas administrativas encuentran en DocuFlow una forma simple de empezar a automatizar.</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiTruck /></div><h4>Logistica y viaticos</h4><p>Ideal para choferes o equipos en calle que hoy envian comprobantes por WhatsApp y requieren carga manual posterior.</p></div></Col>
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiTruck /></div><h4>Flotas y transporte</h4><p>Centraliza remitos, tickets y comprobantes sin depender de una carga administrativa constante.</p></div></Col>
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiTool /></div><h4>Metalurgicas e industrias</h4><p>Reduce horas de carga de remitos, ordenes y facturas en operaciones con mucho movimiento documental.</p></div></Col>
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiFileText /></div><h4>Compras y administracion</h4><p>Agiliza la registracion de facturas, cheques y otros documentos que hoy se cargan a mano.</p></div></Col>
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiMapPin /></div><h4>Operacion en calle</h4><p>Cuando el documento nace fuera de la oficina, DocuFlow permite cargarlo en el momento desde el celular.</p></div></Col>
            <Col md={4}><div className="industry-card-main fade-in-main"><div className="industry-icon-main"><FiTrendingUp /></div><h4>Pymes en crecimiento</h4><p>Empresas que todavia trabajan con WhatsApp, planillas y procesos manuales, pero ya necesitan mas orden.</p></div></Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="industries-closing-main fade-in-main">
                <p>Si hoy alguien de tu equipo pasa horas cargando documentos, probablemente ya haya una parte de tu operacion que DocuFlow puede simplificar.</p>
                <Button className="btn-primary-custom-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
                  Consultar por tu caso
                </Button>
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
                <h2>Preventa abierta para primeros barrios privados</h2>
                <p>Estamos abriendo conversaciones con administraciones, desarrollistas y responsables de seguridad interesados en incorporar patrullaje autonomo en sus predios.</p>
                <Button className="btn-primary-custom-main btn-large-main" href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer">
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

export default LandingV2;
