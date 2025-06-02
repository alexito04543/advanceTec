// src/components/ServicesSection.jsx

import { useState } from "react";
import { Card, Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  FaCode,
  FaRobot,
  FaChartLine,
  FaMobileAlt,
  FaDesktop,
  FaDatabase,
  FaCloud,
  FaStore,
  FaCalendarAlt,
  FaPalette,
  FaFileInvoiceDollar,
  FaFileExcel,
  FaComments,
  FaServer,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./ServicesSection.css";

function ServicesSection() {
  const [show, setShow] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (service) => {
    setActiveService(service);
    setShow(true);
  };

  const services = [
    {
      title: "Desarrollo Web",
      icon: <FaCode />,
      description: "Landing pages, sistemas administrativos y apps web.",
    },
    {
      title: "Apps Móviles",
      icon: <FaMobileAlt />,
      description: "Aplicaciones móviles multiplataforma para Android y iOS.",
    },
    {
      title: "Software de Escritorio",
      icon: <FaDesktop />,
      description: "Programas completos para Windows con interfaz gráfica.",
    },
    {
      title: "Sistemas para Cafeterías / Puntos de Venta",
      icon: <FaStore />,
      description: "Apps para comandas, ventas, inventario y gestión de caja.",
    },
    {
      title: "Agendas y Citas",
      icon: <FaCalendarAlt />,
      description:
        "Sistemas para reservas, programación y seguimiento de citas.",
    },
    {
      title: "Bases de Datos SQL / NoSQL",
      icon: <FaDatabase />,
      description:
        "Diseño, conexión y optimización de datos en la nube o local.",
    },
    {
      title: "Backend y APIs",
      icon: <FaServer />,
      description: "Laravel, Node.js, Express, integración de APIs externas.",
    },
    {
      title: "Facturación y Pagos",
      icon: <FaFileInvoiceDollar />,
      description: "APIs de facturación, pasarelas de pago, email y WhatsApp.",
    },
    {
      title: "Diseño UI/UX",
      icon: <FaPalette />,
      description: "Interfaces modernas, intuitivas y accesibles.",
    },
    {
      title: "Automatización de Procesos",
      icon: <FaRobot />,
      description:
        "Bots con UiPath, scraping web, tareas repetitivas automatizadas.",
    },
    {
      title: "Procesamiento de Archivos",
      icon: <FaFileExcel />,
      description:
        "Lectura y generación de Excel, PDF, TXT, con lógica compleja.",
    },
    {
      title: "Procesamiento y Streaming de Video",
      icon: <FaVideo />,
      description: "On-demand, en vivo, grabación, streaming y control remoto.",
    },
    {
      title: "IA y Datos",
      icon: <FaChartLine />,
      description:
        "Modelos predictivos, clasificación y análisis automatizado.",
    },
    {
      title: "Comunicación",
      icon: <FaComments />,
      description: "Integraciones con SMS, WhatsApp, email y notificaciones.",
    },
    {
      title: "Subida a la Nube",
      icon: <FaCloud />,
      description: "Deploys en Vercel, AWS, bases de datos online, backups.",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 fw-bold">Servicios</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className="glass-card text-center h-100"
                onClick={() => handleShow(service)}
                style={{ cursor: "pointer" }}
              >
                <Card.Body>
                  <div className="icon-circle mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered className="custom-modal">
        <Modal.Header
          closeButton
          style={{
            background: "linear-gradient(135deg, #1f1c2c, #928dab)",
            color: "white",
          }}
        >
          <Modal.Title>{activeService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="text-center"
          style={{
            background: "linear-gradient(135deg, #1f1c2c, #928dab)",
            color: "white",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            {activeService?.icon}
          </div>
          <p className="lead">{activeService?.description}</p>
        </Modal.Body>
        <Modal.Footer
          className="justify-content-center"
          style={{ backgroundColor: "#1f1c2c" }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
            className="btn btn-success px-4 py-2 fw-bold"
            onClick={() => {
              const message = `Hola, estoy interesado en el servicio de ${activeService?.title}`;
              const phone = "5549084150";
              const url = `https://wa.me/52${phone}?text=${encodeURIComponent(
                message
              )}`;
              window.open(url, "_blank");
            }}
          >
            Me interesa / Quiero cotizar
          </motion.button>
          <Button variant="outline-light" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ServicesSection;
