import { FadeIn } from '@/components/animations/FadeIn';
import { CTA } from '@/components/home/CTA';
import { Home as HomeIcon, Store, Building2, Sofa, Briefcase, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'Arquitetura Residencial',
    description: 'Criamos lares que refletem a personalidade de quem os habita. Nossos projetos residenciais unem estética sofisticada, conforto absoluto e soluções inteligentes para o dia a dia, resultando em espaços atemporais e acolhedores.',
    icon: HomeIcon,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    features: ['Projetos arquitetônicos completos', 'Reformas de alto padrão', 'Design de interiores integrado', 'Acompanhamento de obra']
  },
  {
    title: 'Arquitetura Comercial',
    description: 'Desenvolvemos espaços comerciais que encantam clientes e fortalecem o posicionamento da sua marca. Focamos na experiência do consumidor, fluxo de circulação e identidade visual para criar ambientes que impulsionam resultados.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    features: ['Lojas e boutiques', 'Restaurantes e cafés', 'Fachadas comerciais', 'Visual merchandising']
  },
  {
    title: 'Arquitetura Médica',
    description: 'Especialistas em espaços de saúde humanizados. Projetamos clínicas e consultórios que transmitem confiança e tranquilidade aos pacientes, respeitando rigorosamente todas as normas técnicas e sanitárias vigentes.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    features: ['Consultórios médicos e odontológicos', 'Clínicas de estética', 'Aprovação na Vigilância Sanitária', 'Design humanizado']
  },
  {
    title: 'Design de Interiores',
    description: 'Curadoria minuciosa de mobiliário, iluminação, texturas e obras de arte. Transformamos ambientes vazios em composições harmônicas e luxuosas, onde cada elemento tem um propósito e contribui para a atmosfera desejada.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    features: ['Consultoria de estilo', 'Projeto luminotécnico', 'Marcenaria sob medida', 'Curadoria de arte e design']
  },
  {
    title: 'Projetos Corporativos',
    description: 'Escritórios que inspiram produtividade e refletem a cultura da empresa. Criamos layouts eficientes, áreas de colaboração inovadoras e ambientes de foco, sempre priorizando a ergonomia e o bem-estar da equipe.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: ['Sedes corporativas', 'Espaços de coworking', 'Salas de reunião e diretoria', 'Layouts ágeis']
  },
  {
    title: 'Consultoria de Design',
    description: 'Um serviço ágil para quem precisa de direcionamento profissional sem um projeto completo. Orientamos sobre layout, paleta de cores, escolha de acabamentos e mobiliário para renovar seu espaço com assertividade.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
    features: ['Reuniões online ou presenciais', 'Moodboards conceituais', 'Lista de compras (Shopping List)', 'Dicas de styling']
  }
];

export default function Services() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-support-light">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-dark mb-6">Nossos Serviços</h1>
            <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
              Soluções arquitetônicas completas e personalizadas, desenhadas para superar expectativas e materializar seus sonhos.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-32 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                <FadeIn className="w-full lg:w-1/2" direction={index % 2 !== 0 ? 'left' : 'right'}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </FadeIn>
                
                <FadeIn className="w-full lg:w-1/2" direction={index % 2 !== 0 ? 'right' : 'left'} delay={0.2}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-support-beige flex items-center justify-center text-secondary-gold">
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark">{service.title}</h2>
                  </div>
                  <p className="text-secondary-gray leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-primary-dark font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
