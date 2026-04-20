import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import logo from "../../../DocuFlowImages/Logo.png";
import "./Navbar.scss";

function Navbar_AE() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 270) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

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
      setOffcanvasOpen(false);
    }
  };

  // Función para manejar navegación según la página actual
  const handleNavigation = (section) => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, hacer scroll
      handleScroll(section);
    } else {
      // Si estamos en otra página, navegar a la principal y luego hacer scroll
      window.location.href = `/#${section}`;
    }
    setOffcanvasOpen(false);
  };

  return (
    <Navbar className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Navbar.Brand>
          <Link to="/">
            <div className="navbarbrand-wrap">
              <img
                src={logo}
                className="navbarlogo"
                alt="Docuflow"
              />
              <span className="navbarbrand-text">DocuFlow</span>
            </div>
          </Link>
        </Navbar.Brand>
        <button className="menu-toggle" onClick={toggleOffcanvas}>
          ☰
        </button>
        <Nav className="nav">
          <Nav.Link
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("home");
            }}
          >
            Inicio
          </Nav.Link>
          <Nav.Link
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("how-it-works");
            }}
          >
            Como funciona
          </Nav.Link>
          <Nav.Link
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("about");
            }}
          >
            Características
          </Nav.Link>
          <Nav.Link
            className="navlink"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("process");
            }}
          >
            Planes
          </Nav.Link>
          <Nav.Link
            className="navlink"
            href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </Nav.Link>
        </Nav>
        <Offcanvas style={{
          width: "17rem",
          backgroundColor: "#103050",
          color: "white",
          padding: "1rem",
          borderLeft: "2px solid rgba(120, 228, 220, 0.35)",
          boxShadow: "-4px 0px 18px rgba(16, 48, 80, 0.35)",
          transition: "transform 0.3s ease-in-out"
        }}
          show={offcanvasOpen} onHide={toggleOffcanvas} placement="end">
          <Offcanvas.Header closeButton style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
            <Offcanvas.Title style={{
              fontSize: "1.5rem",
              fontWeight: "bold"
            }}
            >Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("home");
                }}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("how-it-works");
                }}
              >
                Como funciona
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("about");
                }}
              >
                Características
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("process");
                }}
              >
                Planes
              </Nav.Link>
              <Nav.Link
                style={{
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                }}
                href="https://wa.me/5493513095969?text=Quiero%20conocer%20m%C3%A1s%20de%20DocuFlow%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </Navbar>
  );
}

export default Navbar_AE;
