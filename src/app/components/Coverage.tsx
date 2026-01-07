import { MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Coverage() {
  const zones = [
    "Cañete Centro",
    "San Vicente",
    "Imperial",
    "San Luis",
    "Mala",
    "Asia",
    "Chilca",
    "Cerro Azul"
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-blue-600" />
            <span className="text-blue-600 uppercase tracking-wide">Cobertura Local</span>
          </div>
          <h2 className="text-4xl mb-4 text-slate-900">
            Presencia en Todo Cañete
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos cerca de ti. Contamos con cobertura en las principales zonas de la provincia 
            para brindarte respuesta rápida cuando más lo necesitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {zones.map((zone, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{zone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl mb-3 text-slate-900">
                ¿No encuentras tu zona?
              </h3>
              <p className="text-slate-600 mb-4">
                Estamos en constante expansión. Contáctanos y evaluaremos cómo podemos 
                brindarte nuestros servicios en tu ubicación.
              </p>
              <a 
                href="#contacto" 
                className="text-blue-600 hover:text-blue-700 underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Consultar disponibilidad →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
