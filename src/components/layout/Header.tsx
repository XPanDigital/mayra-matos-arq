import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled
            ? 'bg-primary-white/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link to="/" className="relative z-50 flex items-center gap-2">
            <span className={cn(
              "font-serif text-2xl font-bold tracking-wider uppercase transition-colors duration-300",
              !isScrolled && location.pathname === '/' ? 'text-primary-white' : 'text-primary-dark'
            )}>
              MMatos
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-secondary-gold relative group",
                  !isScrolled && location.pathname === '/' ? 'text-primary-white/90' : 'text-primary-dark/80',
                  location.pathname === link.path && (isScrolled || location.pathname !== '/' ? 'text-secondary-gold' : 'text-primary-white')
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full",
                  !isScrolled && location.pathname === '/' ? 'bg-primary-white' : 'bg-secondary-gold',
                  location.pathname === link.path && 'w-full'
                )} />
              </Link>
            ))}
            <Link
              to="/contato"
              className={cn(
                "px-6 py-2.5 text-sm font-semibold tracking-wide uppercase border transition-all duration-300",
                !isScrolled && location.pathname === '/'
                  ? 'border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-dark'
                  : 'border-secondary-gold text-secondary-gold hover:bg-secondary-gold hover:text-primary-white'
              )}
            >
              Solicitar Proposta
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden relative z-50 p-2 transition-colors",
              !isScrolled && location.pathname === '/' && !isMobileMenuOpen ? 'text-primary-white' : 'text-primary-dark'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-primary-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif tracking-widest uppercase",
                    location.pathname === link.path ? 'text-secondary-gold' : 'text-primary-dark'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contato"
                className="mt-8 px-8 py-3 bg-secondary-gold text-primary-white text-sm font-semibold tracking-wide uppercase"
              >
                Solicitar Proposta
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
