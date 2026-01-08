import { Facebook, Instagram, Mail, Phone, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div>
                <div className="text-lg text-white">Company of Force Real SAC</div>
                <div className="text-xs text-slate-400">Seguridad Privada 24/7</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-md">
              Empresa local de seguridad privada comprometida con la proteccion de hogares y negocios 
              en toda la provincia de Canete. Servicio profesional y confiable desde 2014.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/v/17ifXzXu9J/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/reel/2178896909283320?sfnsn=wa&mibextid=6AJuK9" 
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
            <h3 className="text-white mb-4">Enlaces Rapidos</h3>
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
                <a href="tel:+51981297162" className="hover:text-amber-400 transition-colors">
                  +51 981 297 162
                </a>
                <a href="tel:+51989995435" className="hover:text-amber-400 transition-colors">
                  / +51 989 995 435
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <a href="mailto:goperaciones.companyreal@gmail.com" className="hover:text-amber-400 transition-colors">
                  goperaciones.companyreal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Av. Bolognesi 345<br />Cañete Centro, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Company of Force Real SAC. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Politica de Privacidad
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terminos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
