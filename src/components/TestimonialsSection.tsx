import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anaisa",
    age: 30,
    treatment: "SPA Capilar",
    text: "Fico muito satisfeita com os resultados do SPA Capilar. Foi incrível o tratamento e o cuidado que recebi na clínica.",
    rating: 5
  },
  {
    id: 2,
    name: "Marina",
    age: 28,
    treatment: "ADVA TX Laser",
    text: "O tratamento com laser superou minhas expectativas. Minha pele ficou mais uniforme e radiante. Recomendo muito!",
    rating: 5
  },
  {
    id: 3,
    name: "Carla",
    age: 35,
    treatment: "AISPA",
    text: "Procedimento muito confortável e resultados visíveis desde a primeira sessão. A equipe é extremamente profissional.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-clinic-green/10 to-clinic-green-light/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-clinic-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-clinic-green-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-clinic-green font-medium mb-2">Depoimentos dos nossos</p>
          <h2 className="text-4xl font-bold text-clinic-green-dark mb-6">
            PACIENTES
          </h2>
          <div className="w-20 h-1 bg-clinic-green mx-auto"></div>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-[var(--shadow-card)] bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Quote className="w-12 h-12 text-clinic-green mx-auto mb-6 opacity-60" />
              <blockquote className="text-xl md:text-2xl text-clinic-green-dark font-medium leading-relaxed mb-6">
                "{testimonials[0].text}"
              </blockquote>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-clinic-gold fill-current" />
                ))}
              </div>
              <cite className="text-clinic-green font-semibold">
                — {testimonials[0].name}, {testimonials[0].age} anos
              </cite>
              <p className="text-sm text-muted-foreground mt-2">
                Tratamento: {testimonials[0].treatment}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(1).map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-[var(--shadow-soft)] bg-white/80 backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-clinic-gold fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-clinic-green opacity-40" />
                </div>
                
                <blockquote className="text-clinic-green-dark mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <cite className="text-clinic-green font-medium">
                    {testimonial.name}, {testimonial.age} anos
                  </cite>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Slider indicators (decorative) */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-2 h-2 bg-clinic-green rounded-full"></div>
          <div className="w-2 h-2 bg-clinic-green/30 rounded-full"></div>
          <div className="w-2 h-2 bg-clinic-green/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;