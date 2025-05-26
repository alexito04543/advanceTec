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
import "./ProjectsSection.css";

const projects = [
  {
    name: "SmartFood",
    description:
      "Sistema completo de pedidos para restaurante en 3 pantallas (recepción, cocina, comedor). Funciona sin internet.",
    image: "https://i.imgur.com/7RYYftH.png",
    tech: ["Laravel", "MySQL", "Local LAN"],
    details:
      "SmartFood es un sistema de pedidos offline, ideal para cocinas, con estados de pedido en tiempo real y sonido al estar listo.",
  },
  {
    name: "AdvanceTec",
    description:
      "Página web para presentar servicios digitales, automatización, IA y más. Moderna y responsiva.",
    image: "https://i.imgur.com/pUpUXzF.png",
    tech: ["React", "Framer Motion", "Bootstrap"],
    details:
      "AdvanceTec es tu plataforma digital para organizar y mostrar tus servicios de manera profesional y moderna.",
  },
  {
    name: "GymApp",
    description:
      "Sistema de gestión para gimnasio con login, rutinas, control de usuarios y modo oscuro.",
    image: "https://i.imgur.com/CPRLHkV.png",
    tech: ["Laravel", "Blade", "AdminLTE"],
    details:
      "Gestión de usuarios, rutinas semanales, estadísticas e interfaz responsiva para gimnasios pequeños y medianos.",
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
                <Card
                  className="project-card"
                  onClick={() => handleShow(proj)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={proj.image} />
                  <Card.Body>
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <div>
                      {proj.tech.map((tech, idx) => (
                        <Badge bg="secondary" className="me-2 mb-2" key={idx}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Modal */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          {selectedProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedProject.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="img-fluid rounded mb-3"
                />
                <p>{selectedProject.details}</p>
                <div className="mb-3">
                  {selectedProject.tech.map((tech, idx) => (
                    <Badge bg="primary" className="me-2" key={idx}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
}

export default ProjectsSection;
