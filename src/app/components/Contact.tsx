import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 923 456 789",
      link: "tel:+51923456789"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@seguridadcanete.pe",
      link: "mailto:info@seguridadcanete.pe"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Bolognesi 345, Cañete Centro",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Atención",
      content: "Lunes a Domingo 24/7",
      link: null
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, quisiera solicitar información sobre sus servicios de seguridad.");
    window.open(`https://wa.me/51923456789?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-400 uppercase tracking-wide">Contacto</span>
          <h2 className="text-4xl mt-2 mb-4">
            Estamos Aquí Para Ayudarte
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Contáctanos para una cotización personalizada o para resolver cualquier duda. 
            Nuestro equipo está listo para atenderte.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a 
                  href={info.link} 
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-slate-300">{info.content}</span>
              );

              return (
                <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-sm uppercase tracking-wide text-slate-400 mb-2">
                      {info.title}
                    </h3>
                    <div className="text-sm">
                      {content}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl mb-4">
              Solicita Tu Cotización por WhatsApp
            </h3>
            <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
              La forma más rápida y directa de contactarnos. Responderemos tus consultas 
              al instante y te daremos toda la información que necesites.
            </p>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>
            <p className="mt-4 text-green-100 text-sm">
              Disponible 24/7 • Respuesta inmediata
            </p>
          </div>

          {/* Emergency Note */}
          <div className="mt-8 text-center">
            <Card className="bg-red-950 border-red-800">
              <CardContent className="p-6">
                <p className="text-red-200">
                  <strong className="text-red-100">¿Emergencia?</strong> Llámanos inmediatamente al{' '}
                  <a href="tel:+51923456789" className="text-red-300 hover:text-red-200 underline">
                    +51 923 456 789
                  </a>
                  {' '}o contacta a las autoridades locales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

