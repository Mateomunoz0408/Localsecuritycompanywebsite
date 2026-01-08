import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logoEscudo from "../../assets/logo-escudo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src={logoEscudo}
              alt="Company of Force Real SAC"
              className="h-10 w-10 object-contain"
            />
            <div className="text-left leading-tight">
              <div className="text-sm font-semibold text-slate-900 sm:text-base">
                Company of Force Real SAC
              </div>
              <div className="text-xs text-slate-600">Seguridad Privada 24/7</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('top')}
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-slate-600 hover:text-amber-600 transition-colors"
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-950"
            >
              Solicitar Cotización
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-amber-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('top')}
                className="text-left py-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left py-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left py-2 text-slate-600 hover:text-amber-600 transition-colors"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-amber-500 hover:bg-amber-600 text-neutral-950 w-full mt-2"
              >
                Solicitar Cotización
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

