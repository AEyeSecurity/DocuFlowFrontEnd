import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "./Footer.scss";

function Footer() {
  const location = useLocation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -36;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (section) => {
    if (location.pathname === '/') {
      handleScroll(section);
    } else {
      window.location.href = `/#${section}`;
    }
  };

  return (
    <footer className="footer py-4" id="contact">
      <Container>
        <Row>
          <Col md={6} className="text-center mb-4">
            <h5>Navegacion</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/#home"
                  className="text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('home');
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('how-it-works');
                  }}
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('about');
                  }}
                >
                  Caracteristicas
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-center mb-4">
            <h5>Contacto</h5>
            <p>
              Email: cit.p52@gmail.com<br />
              Instagram: <a href="https://www.instagram.com/docuflow.arg/" target="_blank" rel="noopener noreferrer" className="text-white">@docuflow.arg</a><br />
              Telefono: +54 351 408-5659<br />
              WhatsApp: <a href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21" target="_blank" rel="noopener noreferrer" className="text-white">Quiero conocer mas de DocuFlow!</a>
            </p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2025 DocuFlow. Todos los derechos reservados.</p>
            <p className="small text-muted">
              Automatizacion documental por WhatsApp con IA para operaciones que necesitan mas velocidad y orden.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
