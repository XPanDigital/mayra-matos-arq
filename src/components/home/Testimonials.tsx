import { FadeIn } from '../animations/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Roberto Almeida',
    role: 'CEO, TechCorp',
    text: 'A Mayra transformou nosso escritório em um ambiente que respira inovação e sofisticação. A atenção aos detalhes e o profissionalismo durante toda a execução foram impecáveis.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dra. Helena Costa',
    role: 'Diretora, Clínica Lumina',
    text: 'O projeto da nossa clínica superou todas as expectativas. Conseguimos um espaço que é ao mesmo tempo extremamente funcional para a equipe e acolhedor para os pacientes.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Família Silveira',
    role: 'Projeto Residencial',
    text: 'Nossa casa nova é um sonho realizado. A MMatos Arquitetura conseguiu captar exatamente o que queríamos: um lar elegante, moderno, mas com muito aconchego para nossa família.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&auto=format&fit=crop'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-support-beige">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">O Que Nossos Clientes Dizem</h2>
          <p className="text-secondary-gray leading-relaxed">
            A satisfação de nossos clientes é o maior reflexo da qualidade e dedicação que empregamos em cada projeto.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.1} direction="up">
              <div className="bg-primary-white p-8 md:p-10 rounded-lg shadow-sm border border-secondary-gray/5 h-full flex flex-col">
                <div className="flex gap-1 text-secondary-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-gray italic leading-relaxed mb-8 flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-primary-dark">{testimonial.name}</h4>
                    <p className="text-xs text-secondary-gray uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
