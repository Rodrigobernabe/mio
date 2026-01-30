import hwarangWarriors from "@/assets/hwarang-warriors.jpg";
import instructorRodrigo from "@/assets/instructor-rodrigo.png";
import { Handshake, Shield, Target, Brain, Flame, Award } from "lucide-react";
const Nosotros = () => {
  const principles = [{
    icon: Handshake,
    title: "Cortesía (Ye Ui)",
    description: "Mostrar respeto y buenos modales hacia los demás, construyendo relaciones basadas en la consideración mutua"
  }, {
    icon: Shield,
    title: "Integridad (Yom Chi)",
    description: "Actuar con honestidad y rectitud, siendo fiel a nuestros valores morales en todo momento"
  }, {
    icon: Target,
    title: "Perseverancia (In Nae)",
    description: "Mantener la determinación frente a los desafíos, sin rendirse ante las dificultades del camino"
  }, {
    icon: Brain,
    title: "Autocontrol (Guk Gi)",
    description: "Dominar nuestras emociones y acciones, manteniendo la compostura en cualquier situación"
  }, {
    icon: Flame,
    title: "Espíritu Indómito (Baekjul Boolgool)",
    description: "Cultivar un coraje inquebrantable y una voluntad que nunca se doblegará ante la adversidad"
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">
                Sobre <span className="text-primary">Hwa Rang</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nuestra academia lleva el nombre de los legendarios <strong>Hwa Rang</strong>, 
                los guerreros de élite del antiguo reino coreano de Silla. Estos nobles jóvenes 
                no solo eran expertos en artes marciales, sino que también cultivaban la poesía, 
                la música y la filosofía.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Al igual que ellos, buscamos formar no solo grandes taekwondistas, 
                sino personas íntegras con valores sólidos y un espíritu indomable.
              </p>
            </div>
            <div className="glass-strong rounded-3xl p-2 overflow-hidden">
              <img src={hwarangWarriors} alt="Guerreros Hwa Rang" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-strong rounded-3xl p-2 overflow-hidden animate-fade-in">
              <img src={instructorRodrigo} alt="Instructor Rodrigo Bernabé" className="w-full h-auto rounded-2xl" />
            </div>
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-4xl font-bold">
                  Nuestro <span className="text-primary">Instructor</span>
                </h2>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sabon Rodrigo Bernabé</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Llevo más de <strong className="text-foreground">13 años practicando de manera continua Taekwondo</strong>, 
                  tiempo en el que he consolidado mi formación y alcanzado el grado de <strong className="text-primary">1er Dan</strong>.
                </p>
                <p>
                  Desde hace <strong className="text-foreground">3 años soy instructor</strong>, y me dedico a enseñar 
                  no solo técnicas de combate y defensa personal, sino también valores fundamentales como la 
                  perseverancia, el respeto y la confianza en uno mismo.
                </p>
                <p className="text-lg">
                  Mi mayor motivación es ayudar a que mis alumnos encuentren en el Taekwondo una herramienta 
                  para superar miedos, fortalecer la autoestima y enfrentar la vida con disciplina y seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Los Cinco <span className="text-primary">Principios</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Los 5 principios del Taekwondo que guían nuestra práctica</p>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {/* First row - 3 principles */}
            <div className="grid md:grid-cols-3 gap-6">
              {principles.slice(0, 3).map((principle, index) => {
                const Icon = principle.icon;
                return <div key={index} className="glass-strong rounded-2xl p-8 hover-lift transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>;
              })}
            </div>
            {/* Second row - 2 principles centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {principles.slice(3, 5).map((principle, index) => {
                const Icon = principle.icon;
                return <div key={index + 3} className="glass-strong rounded-2xl p-8 hover-lift transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Los Cinco Códigos <span className="text-primary">Hwa Rang</span>
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">1. Lealtad a la Nación</h3>
                <p className="text-muted-foreground">Servir con honor y dedicación</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">2. Obediencia a los Padres</h3>
                <p className="text-muted-foreground">Respetar y honrar a la familia</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">3. Fidelidad entre Amigos</h3>
                <p className="text-muted-foreground">Cultivar relaciones verdaderas y leales</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">4. Nunca Retroceder en Batalla</h3>
                <p className="text-muted-foreground">Enfrentar los desafíos con valentía</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">5. Justicia al Matar</h3>
                <p className="text-muted-foreground">Usar la fuerza solo cuando es necesario</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>;
};
export default Nosotros;