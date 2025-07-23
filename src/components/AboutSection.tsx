import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-doctor.jpg";

const AboutSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-clinic-green mb-6">
              Conheça a Clínica Ana Nicassio
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Clínica Marcela Mateus é especializada em dermatologia estética, 
                oferecendo tratamentos personalizados e de alta qualidade para cuidar 
                da sua pele e realçar sua beleza natural.
              </p>
              
              <p>
                Nossa estrutura moderna e equipamentos de última geração garantem 
                procedimentos seguros e eficazes, sempre com foco no bem-estar e 
                satisfação dos nossos pacientes.
              </p>
              
              <p>
                Com uma abordagem personalizada, cada tratamento é desenvolvido 
                especificamente para suas necessidades, garantindo resultados 
                excepcionais e duradouros.
              </p>
            </div>
            
            <Button 
              variant="clinic" 
              size="lg"
              onClick={scrollToBooking}
            >
              Agende Minha Consulta
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img 
                src={aboutImage} 
                alt="Dra. Marcela Mateus" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-clinic-green-light rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-clinic-gold/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
