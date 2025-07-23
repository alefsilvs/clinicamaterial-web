import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Clínica Marcela Mateus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--gradient-overlay)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-lg mb-4 opacity-90">Bem-vindo(a) à Clínica Marcela Mateus</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          CLÍNICA<br />
          MARCELA MATEUS
        </h1>
        
        <Button 
          variant="clinic-circular" 
          size="lg"
          onClick={scrollToBooking}
          className="text-lg px-8 py-6 h-auto"
        >
          Agende sua consulta
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;