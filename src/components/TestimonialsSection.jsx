import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Ana García",
    role: "Dueña de restaurante",
    image: "https://i.pravatar.cc/100?img=1",
    message:
      "Gracias a AdvanceTec ahora gestionamos pedidos sin errores y más rápido que nunca.",
  },
  {
    name: "Luis Pérez",
    role: "CEO de TecnoPlus",
    image: "https://i.pravatar.cc/100?img=2",
    message:
      "El sistema personalizado que crearon para nosotros nos ayudó a automatizar todo el inventario.",
  },
  {
    name: "Karla Méndez",
    role: "Nutrióloga",
    image: "https://i.pravatar.cc/100?img=3",
    message:
      "La interfaz fue súper amigable y moderna. ¡Totalmente recomendable!",
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section py-5">
      <h2 className="text-center text-white fw-bold mb-5">Testimonios</h2>
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card text-white text-center p-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-img rounded-circle mb-3"
                />
                <h5>{t.name}</h5>
                <small className="text-light">{t.role}</small>
                <p className="mt-3 fst-italic">“{t.message}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
