// src/components/ProjectsSection.jsx

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Modal,
  Button,
} from "react-bootstrap";
import { motion } from "framer-motion";
import smartfoodImg from "../assets/smartfood.jpg";
import gymappImg from "../assets/gymapp.png";
import gestiontecImg from "../assets/gestionetec.png";
import controltecImg from "../assets/controlTec.png";

import advance from "../assets/advance.png";
import whatsappGlow from "../assets/whatsapp-glow.svg"; // Nueva imagen futurista
import "./ProjectsSection.css";

const projects = [
  {
    name: "SmartFood",
    description:
      "Sistema completo de pedidos para restaurante en 3 pantallas (recepción, cocina, comedor). Funciona sin internet.",
    image: smartfoodImg,
    tech: ["Laravel", "MySQL", "Local LAN"],
    details:
      "SmartFood es un sistema de pedidos offline, ideal para cocinas, con estados de pedido en tiempo real y sonido al estar listo.",
  },
  {
    name: "AdvanceTec",
    description:
      "Página web para presentar servicios digitales, automatización, IA y más. Moderna y responsiva.",
    image: advance,
    tech: ["React", "Framer Motion", "Bootstrap"],
    details:
      "AdvanceTec es tu plataforma digital para organizar y mostrar tus servicios de manera profesional y moderna.",
  },
  {
    name: "GymApp",
    description:
      "Sistema de gestión para gimnasio con login, rutinas, control de usuarios y modo oscuro.",
    image: gymappImg,
    tech: ["Laravel", "Blade", "AdminLTE"],
    details:
      "Gestión de usuarios, rutinas semanales, estadísticas e interfaz responsiva para gimnasios pequeños y medianos.",
  },
  {
    name: "GestionTec",
    description:
      "Sistema escolar para control de calificaciones, horarios y usuarios.",
    image: gestiontecImg,
    tech: ["Laravel", "MySQL", "Bootstrap"],
    details:
      "GestionTec permite a escuelas gestionar calificaciones, materias y horarios desde un solo lugar con interfaz clara y acceso por roles.",
  },
  {
    name: "ControlTec",
    description:
      "Gestión de carga administrativa, recursos, tiempos y responsables por área.",
    image: controltecImg,
    tech: ["Laravel", "MySQL", "AdminLTE"],
    details:
      "ControlTec está diseñado para administrar tareas administrativas, asignar responsables y dar seguimiento a tiempos y estatus.",
  },
];

function ProjectsSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="projects-section py-5" id="proyectos">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-white fw-bold mb-5">Proyectos</h2>
            <Row>
              {projects.map((proj, index) => (
                <Col md={4} className="mb-4" key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      className="project-card shadow"
                      onClick={() => handleShow(proj)}
                      style={{ cursor: "pointer" }}
                    >
                      <Card.Img variant="top" src={proj.image} />
                      <Card.Body>
                        <Card.Title>{proj.name}</Card.Title>
                        <Card.Text>{proj.description}</Card.Text>
                        <div>
                          {proj.tech.map((tech, idx) => (
                            <Badge
                              bg="secondary"
                              className="me-2 mb-2"
                              key={idx}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Modal */}
          <Modal show={showModal} onHide={handleClose} centered size="lg">
            {selectedProject && (
              <>
                <Modal.Header
                  closeButton
                  style={{
                    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
                    color: "white",
                  }}
                >
                  <Modal.Title>{selectedProject.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body
                  className="text-center"
                  style={{
                    background: "linear-gradient(135deg, #1f1c2c, #928dab)",
                    color: "white",
                  }}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="img-fluid rounded mb-3"
                  />
                  <p className="lead">{selectedProject.details}</p>
                  <div className="mb-3">
                    {selectedProject.tech.map((tech, idx) => (
                      <Badge bg="primary" className="me-2" key={idx}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#1f1c2c" }}>
                  <Button variant="outline-light" onClick={handleClose}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </>
            )}
          </Modal>
        </Container>
      </section>

      {/* Burbuja flotante de WhatsApp con diseño futurista */}
      <a
        href="https://wa.me/525549084150"
        className="whatsapp-bubble"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0 0 15px #25D366",
          background: "radial-gradient(circle, #25D366 40%, #128C7E)",
          animation: "bubble 2s infinite ease-in-out",
        }}
      >
        <img
          src={whatsappGlow}
          alt="WhatsApp"
          style={{ width: 48, height: 48 }}
        />
      </a>
      <style>
        {`
          @keyframes bubble {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
          }
        `}
      </style>
    </>
  );
}

export default ProjectsSection;
