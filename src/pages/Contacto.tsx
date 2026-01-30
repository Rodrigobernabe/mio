import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success("Mensaje enviado correctamente. Te contactaremos pronto!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte. 
            Contáctanos y comienza tu viaje en el Taekwondo
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-strong rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="glass"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="glass"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 000 000 000"
                    className="glass"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    required
                    className="glass"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-strong rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Ubicación</h3>
                    <a 
                      href="https://maps.app.goo.gl/X16Mook2KTmjjWST9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Teléfono</h3>
                    <a 
                      href="https://wa.me/5492657619592" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +54 9 2657 619592
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/academia__hwarang/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @academia__hwarang
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Horarios</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-semibold">Martes y Jueves</p>
                      <p>18:30 - 21:30</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="glass-strong rounded-2xl p-2 overflow-hidden h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3894589875583!2d-66.33046!3d-33.30119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzA0LjMiUyA2NsKwMTknNDkuNyJX!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Hwa Rang"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
