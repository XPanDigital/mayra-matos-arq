import { FadeIn } from '../animations/FadeIn';
import { Home, Store, Building2, Sofa, Briefcase, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Arquitetura Residencial',
    description: 'Residências personalizadas que refletem seu estilo de vida com sofisticação.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop'
  },
  {
    title: 'Arquitetura Comercial',
    description: 'Lojas e fachadas comerciais com design estratégico para atrair e encantar.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Arquitetura Médica',
    description: 'Clínicas e consultórios com design humanizado, funcional e acolhedor.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
  },
  {
    title: 'Design de Interiores',
    description: 'Transformação completa de ambientes internos com curadoria de alto padrão.',
    icon: Sofa,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
  },
  {
    title: 'Projetos Corporativos',
    description: 'Espaços corporativos sofisticados que inspiram produtividade e inovação.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'Consultoria de Design',
    description: 'Orientação profissional e assertiva para direcionar seus projetos.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop'
  }
];

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 bg-support-light">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-6">Nossas Especialidades</h2>
          <p className="text-secondary-gray leading-relaxed">
            Oferecemos soluções arquitetônicas completas, unindo estética apurada e funcionalidade inteligente para diferentes segmentos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <Link to="/servicos" className="block group bg-primary-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-secondary-gray/10 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 z-20 bg-primary-white p-3 rounded-full shadow-md text-secondary-gold">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-primary-dark mb-3 group-hover:text-secondary-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
