import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { CTA } from '@/components/home/CTA';
import { X } from 'lucide-react';

const categories = ['Todos', 'Residencial', 'Comercial', 'Médico', 'Corporativo'];

const projects = [
  {
    id: 1,
    title: 'Residência Horizonte',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Projeto de arquitetura de interiores para uma residência de alto padrão, com foco na integração de ambientes e uso de materiais naturais.'
  },
  {
    id: 2,
    title: 'Clínica Lumina',
    category: 'Médico',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    description: 'Clínica dermatológica projetada para transmitir tranquilidade e assepsia, utilizando tons claros e iluminação indireta.'
  },
  {
    id: 3,
    title: 'Corporate Tower',
    category: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    description: 'Sede corporativa com layout open space, áreas de colaboração e salas de reunião com isolamento acústico.'
  },
  {
    id: 4,
    title: 'Boutique Noir',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop',
    description: 'Loja de roupas de luxo com design minimalista, destacando os produtos através de iluminação cênica.'
  },
  {
    id: 5,
    title: 'Apartamento Vista',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop',
    description: 'Reforma completa de apartamento com vista panorâmica, priorizando a entrada de luz natural e mobiliário de design brasileiro.'
  },
  {
    id: 6,
    title: 'Restaurante Oásis',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    description: 'Projeto de interiores para restaurante de alta gastronomia, criando uma atmosfera intimista e sofisticada.'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-32">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-support-light">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-dark mb-6">Nosso Portfólio</h1>
            <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
              Explore nossa galeria de projetos e descubra como transformamos conceitos em espaços extraordinários.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-primary-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Filters */}
          <FadeIn className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-secondary-gold border-secondary-gold text-primary-white'
                    : 'bg-transparent border-secondary-gray/20 text-secondary-gray hover:border-secondary-gold hover:text-secondary-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} direction="up">
                <div 
                  className="block group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-square overflow-hidden bg-support-light mb-6">
                    <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/40 transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-6 py-3 bg-primary-white text-primary-dark text-sm font-semibold uppercase tracking-widest">
                        Ampliar
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary-gold text-xs font-semibold uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-primary-dark group-hover:text-secondary-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12">
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 text-primary-white/70 hover:text-primary-white transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <div className="bg-primary-white w-full max-w-6xl max-h-full overflow-y-auto rounded-sm flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 aspect-[4/3] lg:aspect-auto lg:h-[80vh]">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-secondary-gold text-sm font-semibold uppercase tracking-widest mb-4">
                {selectedProject.category}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                {selectedProject.title}
              </h2>
              <p className="text-secondary-gray leading-relaxed mb-8">
                {selectedProject.description}
              </p>
              <button 
                onClick={() => setSelectedProject(null)}
                className="inline-block px-8 py-4 border border-primary-dark text-primary-dark font-semibold uppercase tracking-wide text-sm hover:bg-primary-dark hover:text-primary-white transition-colors duration-300 text-center w-full"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
