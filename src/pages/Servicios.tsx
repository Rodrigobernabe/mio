import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import championGirl from "@/assets/champion-girl.jpg";
import womenTeam from "@/assets/women-team.jpg";

const Servicios = () => {
  const services = [
    {
      title: "Infantil/Juvenil",
      age: "Desde 5 años",
      schedule: "Martes y Jueves 18:30-20:00",
      features: [
        "Desarrollo psicomotor",
        "Valores y disciplina",
        "Defensa personal básica",
        "Preparación para exámenes",
        "Técnicas tradicionales ITF",
        "Ambiente seguro y divertido",
      ],
      highlight: true,
      image: championGirl,
      imageAlt: "Campeona Academia Hwa Rang"
    },
    {
      title: "Solo Mujeres",
      age: "Todas las edades",
      schedule: "Martes y Jueves 20:00-21:30",
      features: [
        "Defensa personal práctica",
        "Empoderamiento femenino",
        "Mejora de condición física",
        "Reducción de estrés",
        "Técnicas avanzadas de combate",
        "Ambiente de apoyo y confianza",
      ],
      highlight: false,
      image: womenTeam,
      imageAlt: "Turno Mujeres Academia Hwa Rang"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Te <span className="text-primary">ofrecemos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos clases adaptadas a todas las edades y niveles, 
            desde principiantes hasta cinturones negros
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-3xl h-[400px] md:h-[500px] ${
                  service.highlight ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
                }`}
              >
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/75 transition-all duration-300" />
                  
                  {service.highlight && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold py-1 px-4 rounded-full z-10">
                      MÁS POPULAR
                    </div>
                  )}

                  {/* Content - always visible but more prominent on hover */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                    <div className="opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                      <p className="font-semibold mb-1">{service.age}</p>
                      <p className="text-sm mb-4">{service.schedule}</p>
                    </div>

                    {/* Features - hidden by default, shown on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 space-y-2 mb-4 max-h-0 group-hover:max-h-64 overflow-hidden">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="bg-primary/90 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contacto" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button 
                        className={`w-full transition-all duration-300 hover:scale-105 ${
                          service.highlight 
                            ? "bg-primary hover:bg-primary/90 text-white" 
                            : "bg-secondary hover:bg-secondary/90 text-white"
                        }`}
                      >
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Servicios <span className="text-primary">Adicionales</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Clases Privadas</h3>
              <p className="text-muted-foreground mb-4">
                Entrenamiento personalizado uno a uno para acelerar tu progreso 
                o prepararte para competiciones específicas.
              </p>
              <p className="text-primary font-semibold">Horarios flexibles</p>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Preparación Competitiva</h3>
              <p className="text-muted-foreground mb-4">
                Entrenamiento intensivo para competiciones nacionales e internacionales. 
                Técnicas de combate y formas avanzadas.
              </p>
              <p className="text-primary font-semibold">Consultar disponibilidad</p>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Seminarios y Workshops</h3>
              <p className="text-muted-foreground mb-4">
                Eventos especiales con maestros invitados, seminarios de técnicas 
                avanzadas y formación en arbitraje.
              </p>
              <p className="text-primary font-semibold">Calendario anual</p>
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Exámenes de Grado</h3>
              <p className="text-muted-foreground mb-4">
                Evaluaciones oficiales para avanzar en tu camino hacia el cinturón negro. 
                Certificación ITF reconocida internacionalmente.
              </p>
              <p className="text-primary font-semibold">2 veces al año (si el alumno/a está en condiciones)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
