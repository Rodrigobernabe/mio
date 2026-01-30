import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Biblioteca = () => {
  const [selectedTul, setSelectedTul] = useState<string | null>(null);
  
  const tuls = [
    { name: "Chon-Ji", nivel: "9° Gup", movimientos: 19, videoId: "0geBPLJn0GI" },
    { name: "Dan-Gun", nivel: "8° Gup", movimientos: 21, videoId: "8itOnuWW6kg" },
    { name: "Do-San", nivel: "7° Gup", movimientos: 24, videoId: "tOMeNiOs8H0" },
    { name: "Won-Hyo", nivel: "6° Gup", movimientos: 28, videoId: "upN83Tg2Z98" },
    { name: "Yul-Gok", nivel: "5° Gup", movimientos: 38, videoId: "Cckg254_ZpM" },
    { name: "Joong-Gun", nivel: "4° Gup", movimientos: 32, videoId: "V5UjjpoyE_Y" },
    { name: "Toi-Gye", nivel: "3° Gup", movimientos: 37, videoId: "3MNBZORQ5Kw" },
    { name: "Hwa-Rang", nivel: "2° Gup", movimientos: 29, videoId: "a_oHkGuch-s" },
    { name: "Choong-Moo", nivel: "1° Gup", movimientos: 30, videoId: "c7bxiuCqGEM" },
  ];

  const tulsDan = [
    { name: "Kwang-Gae", nivel: "1° Dan", movimientos: 39, videoId: "sIROpaedlRA" },
    { name: "Po-Eun", nivel: "1° Dan", movimientos: 36, videoId: "A3cJQJR8rh0" },
    { name: "Ge-Baek", nivel: "1° Dan", movimientos: 44, videoId: "_5-gTw8LIGg" },
  ];

  const resources = [
    {
      title: "Manual Teórico Completo",
      description: "Teoría completa del Taekwondo ITF, desde fundamentos hasta conceptos avanzados",
      size: "5.2 MB",
      type: "PDF",
    },
    {
      title: "Terminología Coreana",
      description: "Guía completa de términos en coreano utilizados en las clases",
      size: "1.8 MB",
      type: "PDF",
    },
    {
      title: "Reglamento de Competición",
      description: "Reglamento oficial ITF para competiciones de formas y combate",
      size: "3.1 MB",
      type: "PDF",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-primary">Biblioteca</span> de Recursos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a videos de formas (Tuls) y material teórico para complementar tu entrenamiento
          </p>
        </div>
      </section>

      {/* Video Library - Gups */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Formas de <span className="text-primary">Gups (Cinturones de Color)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuls.map((tul, index) => (
              <div 
                key={index} 
                className="glass-strong rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative group overflow-hidden">
                  {tul.videoId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${tul.videoId}`}
                      title={`Video ${tul.name}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Video próximamente</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tul.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{tul.nivel}</span>
                    <span>{tul.movimientos} movimientos</span>
                  </div>
                  {tul.videoId && (
                    <Button 
                      variant="outline" 
                      className="w-full glass group"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${tul.videoId}`, '_blank')}
                    >
                      Ver en YouTube
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library - 1er Dan */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Formas de <span className="text-primary">1° Dan (Cinturón Negro)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tulsDan.map((tul, index) => (
              <div 
                key={index} 
                className="glass-strong rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-accent/30 relative group overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${tul.videoId}`}
                    title={`Video ${tul.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tul.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-semibold">{tul.nivel}</span>
                    <span>{tul.movimientos} movimientos</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full glass group"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${tul.videoId}`, '_blank')}
                  >
                    Ver en YouTube
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-background/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Material <span className="text-primary">Descargable</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="glass-strong rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {resource.type} · {resource.size}
                  </span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    Descargar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="glass-strong rounded-3xl p-8 text-center">
            <p className="text-muted-foreground">
              <strong>Nota:</strong> Los recursos de esta biblioteca están destinados 
              únicamente para alumnos activos de la academia. El acceso completo 
              requiere credenciales de alumno.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biblioteca;
