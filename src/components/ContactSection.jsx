import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ContactSection.css";

function ContactSection() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que recargue la página
    setSending(true);

    const form = e.target;
    const formData = new FormData(form);

    // Reemplaza con tu URL real de Formspree
    const endpoint = "https://formspree.io/f/xknkyqgr";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000); // Oculta mensaje a los 5 segundos

        form.reset();
      } else {
        alert("Error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Ocurrió un error: " + error.message);
    }

    setSending(false);
  };

  return (
    <section className="contact-section py-5" id="contacto">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-white mb-4 fw-bold">Contáctanos</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="alert alert-success"
                >
                  🎉 Tu mensaje ha sido enviado con éxito.
                </motion.div>
              )}

              <Form className="glass-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    name="mensaje"
                    as="textarea"
                    rows={4}
                    placeholder="Escribe tu mensaje..."
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="btn-gradient w-100"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactSection;
