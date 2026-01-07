import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoEscudo from "@/assets/logo-escudo.png";

export function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764173038831-3ef384e6321e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGd1YXJkJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2Nzc1ODkwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Seguridad profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-900/85 to-neutral-950/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={logoEscudo}
              alt="Company of Force Real SAC"
              className="w-12 h-12 object-contain"
            />
            <span className="text-amber-300 text-lg">Protección 24/7</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-white">
            Seguridad Privada en Cañete
          </h1>
          
          <p className="text-xl text-amber-100 mb-8 leading-relaxed">
            Protegemos lo que más valoras. Servicio de seguridad profesional con personal capacitado 
            y tecnología de vanguardia para tu tranquilidad y la de tu familia.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950 px-8 py-6 text-lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Cotización
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-200 text-amber-100 hover:bg-amber-100/10 px-8 py-6 text-lg"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-white">
            <div>
              <div className="text-3xl mb-1">10+</div>
              <div className="text-amber-200 text-sm">Años de experiencia</div>
            </div>
            <div>
              <div className="text-3xl mb-1">500+</div>
              <div className="text-amber-200 text-sm">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-amber-200 text-sm">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

