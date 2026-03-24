import { FadeIn } from '../animations/FadeIn';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-support-light to-primary-white">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn className="max-w-4xl mx-auto text-center bg-primary-dark p-12 md:p-20 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-white mb-6">
              Pronto para Transformar Seu Espaço?
            </h2>
            <p className="text-primary-white/80 text-lg mb-10 max-w-2xl mx-auto font-light">
              Agende uma consulta gratuita e descubra como nossa expertise pode dar vida à sua visão com elegância e funcionalidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contato" 
                className="px-8 py-4 bg-secondary-gold text-primary-white font-semibold uppercase tracking-wide text-sm hover:bg-primary-white hover:text-primary-dark transition-colors duration-300"
              >
                Solicitar Proposta
              </Link>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 border border-primary-white/30 text-primary-white font-semibold uppercase tracking-wide text-sm hover:bg-primary-white hover:text-primary-dark transition-colors duration-300"
              >
                Enviar Mensagem
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
