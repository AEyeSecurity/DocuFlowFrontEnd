import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar_AE from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../../assets/Logo.png';
import './UnderDevelopment.scss';

function UnderDevelopment({ serviceName }) {
  useEffect(() => {
    // Scroll al inicio de la página cuando se carga
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="under-development-page">
      <Navbar_AE />
      
      <section className="development-hero">
        <Container>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col lg={8} className="text-center">
              <div className="development-content fade-in">
                <div className="logo-container">
                  <img src={logo} alt="A-Eye Technology" className="development-logo" />
                </div>
                
                <h1 className="development-title">
                  {serviceName} - <span className="highlight">En Desarrollo</span>
                </h1>
                
                <p className="development-subtitle">
                  Estamos trabajando arduamente para traerte la mejor experiencia en {serviceName.toLowerCase()}. 
                  Nuestro equipo está desarrollando una solución innovadora que pronto estará disponible.
                </p>
                
                <div className="development-features">
                  <div className="feature-item">
                    <div className="feature-icon">🚀</div>
                    <span>Desarrollo en Progreso</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⚡</div>
                    <span>Próximamente Disponible</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🎯</div>
                    <span>Innovación Constante</span>
                  </div>
                </div>
                
                <div className="development-actions">
                  <Link to="/">
                    <Button className="btn-primary-custom btn-large">
                      Volver al Inicio
                    </Button>
                  </Link>
                  <Button 
                    className="btn-secondary-custom btn-large"
                    href="https://wa.link/7wp1uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar Disponibilidad
                  </Button>
                </div>
                
                <div className="progress-indicator">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <p className="progress-text">Desarrollo en progreso...</p>
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

export default UnderDevelopment; 