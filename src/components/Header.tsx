import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[var(--gradient-green)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-clinic-green">Clínica Marcela Mateus</h1>
              <p className="text-sm text-muted-foreground">Dermatologia Estética</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-clinic-green transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-clinic-green transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('treatments')}
              className="text-foreground hover:text-clinic-green transition-colors"
            >
              Tratamentos
            </button>
            <Button 
              variant="clinic" 
              onClick={() => scrollToSection('contact')}
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-clinic-green transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-clinic-green transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('treatments')}
                className="text-left text-foreground hover:text-clinic-green transition-colors"
              >
                Tratamentos
              </button>
              <Button 
                variant="clinic" 
                className="self-start"
                onClick={() => scrollToSection('contact')}
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;