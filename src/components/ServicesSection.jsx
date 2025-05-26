// src/components/ServicesSection.jsx

import { Card, Container, Row, Col } from "react-bootstrap";
import { FaCode, FaChartLine, FaRobot } from "react-icons/fa";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      title: "Desarrollo Web",
      icon: <FaCode />,
      description: "Landing pages, sistemas completos y más.",
    },
    {
      title: "Automatización RPA",
      icon: <FaRobot />,
      description: "Automatizamos procesos repetitivos con UiPath.",
    },
    {
      title: "IA / Datos",
      icon: <FaChartLine />,
      description: "Modelos predictivos, clasificación y más.",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold">Servicios</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="glass-card text-center">
              <Card.Body>
                <div className="icon-circle mb-3">{service.icon}</div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesSection;
