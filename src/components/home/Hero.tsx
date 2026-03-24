import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-primary-dark">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/50 to-primary-dark/80" />
      </motion.div>

      <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif text-4xl md:text-6xl lg:text-[72px] leading-[1.1] text-primary-white mb-6 max-w-5xl"
        >
          Transforme Seus Espaços em <br className="hidden md:block" />
          <span className="italic text-secondary-gold">Obras de Arte</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-primary-white/90 text-base md:text-lg max-w-2xl mb-10 font-light"
        >
          Arquitetura e Design de Interiores de Alto Padrão para Empresas, Negócios e Residências exclusivas.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            to="/projetos" 
            className="px-8 py-4 bg-secondary-gold text-primary-white font-semibold uppercase tracking-wide text-sm hover:bg-primary-white hover:text-primary-dark transition-colors duration-300 text-center"
          >
            Explorar Projetos
          </Link>
          <Link 
            to="/contato" 
            className="px-8 py-4 border border-primary-white text-primary-white font-semibold uppercase tracking-wide text-sm hover:bg-primary-white hover:text-primary-dark transition-colors duration-300 text-center"
          >
            Solicitar Orçamento
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
