import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroClass from "@/assets/hero-class.jpg";
import { Shield, Target, Users, Award, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Inicio = () => {
  const values = [{
    icon: Shield,
    title: "Disciplina",
    description: "Forjamos el carácter a través de la práctica constante y dedicada"
  }, {
    icon: Target,
    title: "Excelencia",
    description: "Buscamos la perfección en cada movimiento y técnica"
  }, {
    icon: Users,
    title: "Respeto",
    description: "El honor y el respeto son la base de nuestro arte marcial"
  }, {
    icon: Award,
    title: "Superación",
    description: "Cada día es una oportunidad para ser mejor que ayer"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroClass})`,
        filter: "brightness(0.4)"
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 bg-inherit" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Taekwondo ITF{" "}
            <span className="text-primary animate-heartbeat inline-block cursor-default font-brush text-6xl md:text-8xl">
              Hwa Rang
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            El legado de los antiguos guerreros coreanos vive en cada práctica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Únete Ahora
              </Button>
            </Link>
            <Link to="/nosotros">
              <Button size="lg" variant="outline" className="glass border-white text-white hover:bg-white/20">
                Conoce Más
              </Button>
            </Link>
          </div>

          {/* Team Photo */}
          
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Nuestros <span className="text-primary">Valores</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Inspirados en el código de honor de los antiguos Hwa Rang
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <div key={index} className="glass-strong rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Lo que dicen <span className="text-primary">nuestros alumnos</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Historias reales de transformación y superación
          </p>
          
          <Carousel className="max-w-7xl mx-auto">
            <CarouselContent>
              {[{
              name: "María González",
              role: "Turno Mujeres",
              text: "El Taekwon-Do me ha dado una confianza que nunca imaginé tener. No solo aprendí defensa personal, sino que encontré una familia.",
              rating: 5
            }, {
              name: "Juan Pérez",
              role: "Cinturón Negro 1° Dan",
              text: "Comencé de niño y ahora soy cinturón negro. El maestro Rodrigo siempre nos impulsa a ser mejores personas dentro y fuera del Dojang.",
              rating: 5
            }, {
              name: "Sofía Martínez",
              role: "Turno Infantil",
              text: "Mi hija ha mejorado muchísimo en disciplina y concentración. Las clases son divertidas y el ambiente es muy familiar.",
              rating: 5
            }, {
              name: "Carlos Rodríguez",
              role: "Cinturón Rojo",
              text: "Después de años buscando un deporte, encontré en el Taekwon-Do ITF la disciplina perfecta. Excelente instructor y compañeros.",
              rating: 5
            }, {
              name: "Laura Sánchez",
              role: "Turno Mujeres",
              text: "Las clases de solo mujeres son increíbles. Me siento empoderada, más fuerte física y mentalmente. ¡Lo recomiendo al 100%!",
              rating: 5
            }].map((testimonial, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glass-strong rounded-2xl p-6 hover-lift h-full">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center animate-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mx-0 px-0">
              ¿Listo para comenzar tu <span className="text-primary">camino del guerrero</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a nuestra academia y descubre el poder del Taekwondo ITF
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white hover-lift px-px">
                Contacta con Nosotros
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Inicio;