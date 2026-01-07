import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import logoEscudo from "@/assets/logo-escudo.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoEscudo}
                alt="Company of Force Real SAC"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="text-lg text-white">SecuriCañete</div>
                <div className="text-xs text-slate-400">Seguridad Privada</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-md">
              Empresa local de seguridad privada comprometida con la protección de hogares y negocios 
              en toda la provincia de Cañete. Servicio profesional y confiable desde 2014.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-amber-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-400 transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-amber-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <a href="tel:+51923456789" className="hover:text-amber-400 transition-colors">
                  +51 923 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <a href="mailto:info@seguridadcanete.pe" className="hover:text-amber-400 transition-colors">
                  info@seguridadcanete.pe
                </a>
              </li>
              <li className="flex items-start gap-2">
                <img
                  src={logoEscudo}
                  alt="Company of Force Real SAC"
                  className="w-4 h-4 mt-0.5 flex-shrink-0 object-contain"
                />
                <span>Av. Bolognesi 345<br />Cañete Centro, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 SecuriCañete. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

