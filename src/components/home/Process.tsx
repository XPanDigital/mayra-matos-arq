import { FadeIn } from '../animations/FadeIn';
import { MessageCircle, PenTool, FileText, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Consulta Inicial',
    description: 'Entendemos suas necessidades, visão e expectativas para o espaço.',
    icon: MessageCircle
  },
  {
    title: 'Conceituação',
    description: 'Desenvolvemos o conceito arquitetônico e a proposta visual inicial.',
    icon: PenTool
  },
  {
    title: 'Projeto Detalhado',
    description: 'Criamos o projeto executivo completo com todas as especificações técnicas.',
    icon: FileText
  },
  {
    title: 'Execução',
    description: 'Acompanhamos a obra de perto para garantir a fidelidade ao projeto.',
    icon: Hammer
  },
  {
    title: 'Entrega',
    description: 'Seu espaço transformado, finalizado e pronto para ser vivido.',
    icon: CheckCircle
  }
];

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-primary-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">Nosso Processo</h2>
          <p className="text-secondary-gray leading-relaxed">
            Uma metodologia estruturada para garantir excelência, transparência e tranquilidade do início ao fim do seu projeto.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-secondary-gray/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="relative">
                {/* Mobile Line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-3rem] w-[1px] bg-secondary-gray/20 z-0" />
                )}
                
                <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 group">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-primary-white border-2 border-support-light flex items-center justify-center text-secondary-gray group-hover:border-secondary-gold group-hover:text-secondary-gold group-hover:shadow-lg transition-all duration-300 relative z-10">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="lg:text-center pt-2 lg:pt-0">
                    <div className="text-secondary-gold font-serif text-sm font-bold mb-2">0{index + 1}</div>
                    <h3 className="font-serif text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
                    <p className="text-secondary-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
