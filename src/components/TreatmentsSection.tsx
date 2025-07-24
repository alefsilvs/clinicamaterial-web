import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Sparkles, Scissors } from "lucide-react";

const treatments = [
  {
    id: 1,
    icon: Zap,
    title: "ADVA TX – LASER",
    description: "Tratamento avançado para rejuvenescimento da pele usando tecnologia laser de última geração. Reduz manchas, rugas e melhora a textura da pele.",
    benefits: ["Rejuvenescimento", "Redução de manchas", "Melhora da textura"]
  },
  {
    id: 2,
    icon: Sparkles,
    title: "AISPA",
    description: "Procedimento não invasivo que utiliza tecnologia inovadora para revitalização facial. Estimula a produção de colágeno naturalmente.",
    benefits: ["Não invasivo", "Estimula colágeno", "Resultados naturais"]
  },
  {
    id: 3,
    icon: Scissors,
    title: "SPA CAPILAR",
    description: "Tratamento completo de relaxamento e revitalização capilar. Hidratação profunda e cuidados especializados para cabelos saudáveis.",
    benefits: ["Relaxamento", "Hidratação profunda", "Revitalização"]
  }
];

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-white to-clinic-green-light/30 relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-10">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-clinic-green">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-16 h-16 opacity-10 rotate-45">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-clinic-green">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinic-green mb-4">
            Nossos tratamentos destaques
          </h2>
          <div className="w-20 h-1 bg-clinic-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <Card 
                key={treatment.id} 
                className="group hover:shadow-[var(--shadow-card)] hover:-translate-y-2 transition-all duration-300 border-0 shadow-[var(--shadow-soft)] bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-clinic-green-light rounded-full flex items-center justify-center mb-4 group-hover:bg-clinic-green group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8 text-clinic-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-clinic-green mb-2">
                    {treatment.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {treatment.description}
                  </p>
                  
                  <div className="space-y-2">
                    {treatment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-clinic-green rounded-full"></div>
                        <span className="text-sm text-clinic-green font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="clinic-outline" 
                    className="w-full mt-6"
                    onClick={() => window.open('https://wa.me/5561983036586', '_blank')}
                  >
                    Quero saber mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
