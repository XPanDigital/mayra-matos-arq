import { FadeIn } from '../animations/FadeIn';
import { Link } from 'react-router-dom';

export function AboutPreview() {
  return (
    <section className="py-20 md:py-32 bg-primary-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                  alt="Mayra Matos - Arquiteta" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border-l-2 border-b-2 border-secondary-gold z-0 hidden md:block" />
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-2">Mayra Matos</h2>
              <p className="text-secondary-gold font-medium uppercase tracking-widest text-sm mb-8">Arquiteta & Designer de Interiores</p>
              
              <div className="space-y-6 text-secondary-gray leading-relaxed mb-10">
                <p>
                  Com uma visão que une o minimalismo luxuoso ao modernismo contemporâneo, busco criar espaços que transcendem a estética. Acredito que "menos é mais, mas cada detalhe importa".
                </p>
                <p>
                  Meu trabalho é traduzir a essência de cada cliente em ambientes sofisticados, funcionais e atemporais, seja em uma residência de alto padrão ou em um espaço corporativo que precisa comunicar autoridade e inovação.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">+5000</h4>
                  <p className="text-sm text-secondary-gray uppercase tracking-wide">m² Projetados</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">+100</h4>
                  <p className="text-sm text-secondary-gray uppercase tracking-wide">Projetos Realizados</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">15+</h4>
                  <p className="text-sm text-secondary-gray uppercase tracking-wide">Anos de Experiência</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">Brasil</h4>
                  <p className="text-sm text-secondary-gray uppercase tracking-wide">Atendimento Nacional</p>
                </div>
              </div>

              <Link 
                to="/sobre" 
                className="inline-flex items-center gap-2 text-primary-dark font-semibold uppercase tracking-wide text-sm hover:text-secondary-gold transition-colors group"
              >
                Conhecer Mais
                <span className="w-8 h-[1px] bg-primary-dark group-hover:bg-secondary-gold transition-colors" />
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
