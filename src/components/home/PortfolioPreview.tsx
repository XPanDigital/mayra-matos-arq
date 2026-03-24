import { FadeIn } from '../animations/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Residência Horizonte',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Clínica Lumina',
    category: 'Médico',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Corporate Tower',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Boutique Noir',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop'
  }
];

export function PortfolioPreview() {
  return (
    <section className="py-20 md:py-32 bg-primary-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">Projetos em Destaque</h2>
            <p className="text-secondary-gray max-w-xl">
              Uma seleção de nossos trabalhos mais recentes, onde cada detalhe foi pensado para criar experiências memoráveis.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link 
              to="/projetos" 
              className="inline-flex items-center gap-2 text-primary-dark font-semibold uppercase tracking-wide text-sm hover:text-secondary-gold transition-colors group"
            >
              Ver Todos os Projetos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up">
              <Link to={`/projetos`} className="block group">
                <div className="relative aspect-[4/3] overflow-hidden bg-support-light mb-6">
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/40 transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-6 py-3 bg-primary-white text-primary-dark text-sm font-semibold uppercase tracking-widest">
                      Ver Projeto
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-secondary-gold text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-dark group-hover:text-secondary-gold transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
