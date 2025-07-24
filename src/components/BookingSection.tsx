import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import aboutImage from "@/assets/about-doctor.jpg";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
}

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Agendamento enviado!",
      description: "Entraremos em contato em breve para confirmar sua consulta.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      message: ''
    });
  };

  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-white to-clinic-green-light/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image and Info */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Dra. Marcela Mateus" 
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-[var(--shadow-card)]"
              />
              <div className="absolute -bottom-6 -right-6 bg-clinic-green text-white p-4 rounded-full shadow-[var(--shadow-button)]">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-clinic-green">
                Agende sua consulta agora
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-clinic-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-clinic-green mb-2">Consulta Personalizada</h3>
                    <p className="text-muted-foreground">Avaliação completa da sua pele e necessidades específicas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-clinic-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-clinic-green mb-2">Plano de Tratamento</h3>
                    <p className="text-muted-foreground">Desenvolvimento de protocolo exclusivo para seus objetivos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-clinic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-clinic-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-clinic-green mb-2">Acompanhamento</h3>
                    <p className="text-muted-foreground">Suporte contínuo durante todo o processo de tratamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <Card className="shadow-[var(--shadow-card)] border-0">
            <CardHeader className="bg-clinic-green text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                Formulário de Agendamento
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(61) 99931-8055"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Data preferencial</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre suas necessidades ou dúvidas..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="clinic" 
                  size="lg" 
                  className="w-full"
                >
                  Agendar Minha Consulta
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Entraremos em contato para confirmar sua consulta.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
