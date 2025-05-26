import ModernNavbar from "./components/ModernNavbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ModernNavbar />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>

        <section id="servicios">
          <ServicesSection />
        </section>

        <section id="proyectos">
          <ProjectsSection />
        </section>

        <section id="contacto">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
