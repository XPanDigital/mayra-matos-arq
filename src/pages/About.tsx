import { FadeIn } from '@/components/animations/FadeIn';
import { CTA } from '@/components/home/CTA';

export default function About() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-support-light">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-dark mb-6">Sobre Nós</h1>
            <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
              Conheça a história e a filosofia por trás da MMatos Arquitetura.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bio Section */}
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
                <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border-l-2 border-b-2 border-secondary-gold z-0 hidden md:block" />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-2">Mayra Matos</h2>
                <p className="text-secondary-gold font-medium uppercase tracking-widest text-sm mb-8">Arquiteta & Designer de Interiores</p>
                
                <div className="space-y-6 text-secondary-gray leading-relaxed mb-10">
                  <p>
                    Formada em Arquitetura e Urbanismo pelas melhores instituições do país, com especialização em Design de Interiores de Alto Padrão em Milão, Mayra Matos fundou seu escritório com um propósito claro: elevar a experiência de habitar e trabalhar através do design.
                  </p>
                  <p>
                    Com mais de 15 anos de atuação no mercado, sua assinatura é reconhecida pela fusão perfeita entre o minimalismo sofisticado e o conforto absoluto. Cada projeto é tratado como uma obra de arte única, desenhada sob medida para refletir a identidade de quem o vivencia.
                  </p>
                  <p>
                    "Acredito que a verdadeira sofisticação reside na simplicidade bem executada. Nosso papel é traduzir sonhos em espaços tangíveis, onde a estética e a funcionalidade caminham juntas em perfeita harmonia."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-secondary-gray/20">
                  <div>
                    <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">+5000</h4>
                    <p className="text-sm text-secondary-gray uppercase tracking-wide">m² Projetados</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl font-bold text-primary-dark mb-1">+100</h4>
                    <p className="text-sm text-secondary-gray uppercase tracking-wide">Projetos Realizados</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-primary-dark text-primary-white">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12">Nossa Filosofia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-secondary-gold mb-4">Exclusividade</h3>
                <p className="text-primary-white/80 leading-relaxed">
                  Não criamos projetos em série. Cada ambiente é pensado de forma única, respeitando a essência e as necessidades específicas de cada cliente.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-secondary-gold mb-4">Atemporalidade</h3>
                <p className="text-primary-white/80 leading-relaxed">
                  Buscamos um design que resista ao teste do tempo, evitando modismos passageiros e focando em materiais nobres e linhas puras.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-secondary-gold mb-4">Excelência</h3>
                <p className="text-primary-white/80 leading-relaxed">
                  Do primeiro esboço à entrega das chaves, nosso compromisso é com a qualidade absoluta em cada detalhe e acabamento.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </div>
  );
}
