import { motion } from "framer-motion";
import ilustracion from "../assets/undraw_data-reports_l2u3.svg";
import { Link } from "react-scroll";

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <motion.div
        className="hero-content text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={ilustracion}
          alt="Ilustración"
          className="hero-img mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <h1 className="fw-bold">
          Organiza y transforma con{" "}
          <span className="brand-name">AdvanceTec</span>
        </h1>
        <p className="lead">
          Soluciones digitales, automatización e inteligencia artificial para tu
          negocio
        </p>
        <Link to="servicios" smooth={true} duration={600}>
          <motion.button
            className="btn btn-lg btn-gradient mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Servicios
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
