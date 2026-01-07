import { Shield, Users, Camera, Clock, Building2, Home } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Vigilancia Presencial",
      description: "Personal capacitado y uniformado para la protección de tu propiedad las 24 horas del día.",
      features: ["Personal certificado", "Turnos rotativos", "Informes diarios"]
    },
    {
      icon: Camera,
      title: "Monitoreo CCTV",
      description: "Sistemas de videovigilancia con monitoreo remoto en tiempo real para prevención y respuesta rápida.",
      features: ["Cámaras HD", "Grabación continua", "Acceso remoto"]
    },
    {
      icon: Clock,
      title: "Rondas de Seguridad",
      description: "Patrullaje periódico en tu zona para prevenir incidentes y mantener la seguridad del vecindario.",
      features: ["Horarios flexibles", "Reporte de novedades", "Respuesta inmediata"]
    },
    {
      icon: Building2,
      title: "Seguridad Empresarial",
      description: "Protección integral para comercios, industrias y oficinas con protocolos personalizados.",
      features: ["Control de acceso", "Custodia de valores", "Planes a medida"]
    },
    {
      icon: Home,
      title: "Seguridad Residencial",
      description: "Resguardo de hogares y condominios con personal de confianza y sistemas modernos.",
      features: ["Vigilancia 24/7", "Control de visitas", "Alarmas conectadas"]
    },
    {
      icon: Shield,
      title: "Eventos Especiales",
      description: "Seguridad para eventos sociales, corporativos y celebraciones con personal especializado.",
      features: ["Personal capacitado", "Planes flexibles", "Coordinación logística"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 uppercase tracking-wide">Nuestros Servicios</span>
          <h2 className="text-4xl mt-2 mb-4 text-slate-900">
            Soluciones de Seguridad Integrales
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios adaptados a tus necesidades específicas, 
            con el respaldo de años de experiencia en el sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow border-slate-200 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl text-slate-900">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4 text-slate-900">
                ¿Por Qué Elegirnos?
              </h3>
              <p className="text-slate-600 mb-6">
                Somos una empresa local que entiende las necesidades de seguridad de nuestra comunidad. 
                Nuestro compromiso es brindar tranquilidad con un servicio cercano y profesional.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Personal Certificado:</strong>
                    <span className="text-slate-600"> Todo nuestro equipo cuenta con capacitación profesional y certificaciones vigentes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Empresa Local:</strong>
                    <span className="text-slate-600"> Conocemos Cañete y sus particularidades, lo que nos permite brindar un servicio más efectivo.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Respuesta Rápida:</strong>
                    <span className="text-slate-600"> Nuestra presencia local garantiza tiempos de respuesta inmediatos ante cualquier emergencia.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-slate-900">Tecnología Moderna:</strong>
                    <span className="text-slate-600"> Utilizamos equipos y sistemas de última generación para garantizar tu seguridad.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHRydXN0fGVufDF8fHx8MTc2Nzc2NDg5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Confianza y profesionalismo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
