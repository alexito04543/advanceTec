import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import Sidebar from "./Sidebar";

function ResponsiveNavbar({ onSelect }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <Offcanvas show backdrop placement="start" scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>AdvanceTec</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar onSelect={onSelect} />
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>AdvanceTec</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => onSelect("dashboard")}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => onSelect("productos")}>Productos</Nav.Link>
            <Nav.Link onClick={() => onSelect("servicios")}>Servicios</Nav.Link>
            <Nav.Link onClick={() => onSelect("contacto")}>
              Contáctanos
            </Nav.Link>
            <Nav.Link onClick={() => onSelect("conocenos")}>Conócenos</Nav.Link>
            <Nav.Link onClick={() => onSelect("clientes")}>Clientes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
