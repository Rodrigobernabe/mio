import logo from "@/assets/logo.png";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-strong border-t border-white/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Hwa Rang Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Formando guerreros modernos con la filosofía de los antiguos Hwa Rang
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-primary">Contacto</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://maps.app.goo.gl/X16Mook2KTmjjWST9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Ver ubicación en Maps</span>
              </a>
              <a 
                href="https://wa.me/5492657619592" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+54 9 2657 619592</span>
              </a>
              <a 
                href="https://www.instagram.com/academia__hwarang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <span>@academia__hwarang</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-primary">Horarios</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Martes y Jueves</p>
                  <p className="text-muted-foreground">18:30 - 21:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Taekwondo ITF Hwa Rang. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
