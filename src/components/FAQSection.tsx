import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "item-1",
    question: "Os tratamentos são dolorosos?",
    answer: "A maioria dos nossos tratamentos são minimamente invasivos e causam pouco ou nenhum desconforto. Utilizamos técnicas e equipamentos modernos que priorizam o conforto do paciente. Quando necessário, aplicamos métodos de anestesia tópica para garantir uma experiência mais confortável."
  },
  {
    id: "item-2",
    question: "Quantas sessões são necessárias?",
    answer: "O número de sessões varia de acordo com o tipo de tratamento e as características individuais de cada paciente. Geralmente, tratamentos como laser podem necessitar de 3 a 6 sessões, enquanto procedimentos de rejuvenescimento podem requerer de 4 a 8 sessões. Durante a consulta, elaboramos um plano personalizado."
  },
  {
    id: "item-3",
    question: "Os resultados são permanentes?",
    answer: "A durabilidade dos resultados depende do tipo de tratamento realizado e dos cuidados pós-procedimento. Alguns tratamentos oferecem resultados de longa duração, enquanto outros podem necessitar de sessões de manutenção. Orientamos sobre os cuidados necessários para prolongar os benefícios obtidos."
  },
  {
    id: "item-4",
    question: "Qual é o tempo de recuperação?",
    answer: "A maioria dos nossos tratamentos permite retorno imediato às atividades normais. Alguns procedimentos podem causar leve vermelhidão ou inchaço que desaparece em poucas horas. Procedimentos mais intensivos podem requerer 1 a 3 dias de cuidados especiais."
  },
  {
    id: "item-5",
    question: "Como agendar uma consulta?",
    answer: "Você pode agendar sua consulta através do WhatsApp, telefone ou preenchendo o formulário em nosso site. Oferecemos consultas presenciais onde avaliamos suas necessidades e elaboramos um plano de tratamento personalizado."
  }
];

const FAQSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5561983036586', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clinic-green mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-muted-foreground">
            Encontre respostas para as perguntas mais comuns sobre nossos tratamentos
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-clinic-green-light/30 rounded-lg px-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-clinic-green font-semibold hover:text-clinic-green-dark">
                <div className="flex items-center justify-between w-full pr-4">
                  <span>{faq.question}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp();
                    }}
                    className="ml-4 p-2 bg-clinic-green-light hover:bg-clinic-green hover:text-white rounded-full transition-all duration-300 flex-shrink-0"
                    title="Conversar no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-clinic-green-light/20 rounded-2xl">
          <h3 className="text-xl font-semibold text-clinic-green mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center space-x-2 bg-clinic-green text-white px-6 py-3 rounded-lg hover:bg-clinic-green-dark transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Conversar no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
