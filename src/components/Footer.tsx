import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-green-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-clinic-green font-bold">CM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Clínica Estética Beauty Ativa</h3>
                <p className="text-clinic-green-light text-sm">Dermatologia Estética</p>
              </div>
            </div>
            
            <p className="text-clinic-green-light leading-relaxed">
              Especializada em dermatologia estética, oferecendo tratamentos 
              personalizados com tecnologia avançada e cuidado profissional.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/esteticabeautyativa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-clinic-green rounded-full flex items-center justify-center hover:bg-white hover:text-clinic-green transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5561999318055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-clinic-green rounded-full flex items-center justify-center hover:bg-white hover:text-clinic-green transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-clinic-green-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Telefone</p>
                  <a 
                    href="tel:+5561999318055" 
                    className="text-clinic-green-light hover:text-white transition-colors"
                  >
                    (61) 99931-8055
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-clinic-green-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a 
                    href="mailto:alef63134@gmail.com" 
                    className="text-clinic-green-light hover:text-white transition-colors"
                  >
                    alef63134@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-clinic-green-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a 
                    href="https://wa.me/5561999318055" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-clinic-green-light hover:text-white transition-colors"
                  >
                    (61) 99931-8055
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Localização</h3>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-clinic-green-light mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium mb-2">Endereço</p>
                <address className="text-clinic-green-light not-italic leading-relaxed">
                  Quadra Qn 7 Area Especial 1<br />
                  Sala 112 - Riacho Mall<br />
                  Brasília - DF
                </address>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="font-medium">Links Rápidos</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-clinic-green-light hover:text-white transition-colors"
                >
                  Sobre a Clínica
                </button>
                <button 
                  onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-clinic-green-light hover:text-white transition-colors"
                >
                  Tratamentos
                </button>
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-clinic-green-light hover:text-white transition-colors"
                >
                  Agendamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-clinic-green/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-clinic-green-light text-sm">
                © {currentYear} Clínica Estética Beauty Ativa. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-clinic-green-light text-sm">
                Desenvolvido por <span className="text-white font-medium">MAKEWL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
