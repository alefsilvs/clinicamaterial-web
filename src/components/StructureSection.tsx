import { Button } from "@/components/ui/button";
import receptionImage from "@/assets/clinic-reception.jpg";
import treatmentImage from "@/assets/treatment-room.jpg";
import estetica04 from "@/assets/estetica 04.jpg";
import estetica01 from "@/assets/estetica 01.jpg";

const StructureSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-clinic-green mb-4">
            Uma estrutura completa para você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos ambientes modernos e equipamentos de última geração, 
            projetados para oferecer o máximo conforto e segurança.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative group overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img 
              src={estetica04} 
              alt="Recepção da Clínica Marcela Mateus" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Recepção</h3>
                <p className="text-sm opacity-90">Ambiente acolhedor e moderno</p>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img 
              src={estetica01} 
              alt="Sala de Tratamento" 
              className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Sala de Tratamento</h3>
                <p className="text-sm opacity-90">Equipamentos de última geração</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-clinic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-clinic-green">Segurança</h3>
            <p className="text-sm text-muted-foreground">Protocolos rigorosos de higiene e biossegurança</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-clinic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-clinic-green">Tecnologia</h3>
            <p className="text-sm text-muted-foreground">Equipamentos modernos e técnicas avançadas</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-clinic-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 className="font-semibold text-clinic-green">Conforto</h3>
            <p className="text-sm text-muted-foreground">Ambiente acolhedor e relaxante</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            variant="clinic" 
            size="lg"
            onClick={scrollToBooking}
          >
            Agende Minha Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
