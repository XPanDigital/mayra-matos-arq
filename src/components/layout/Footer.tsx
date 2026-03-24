import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="font-serif text-3xl font-bold tracking-wider uppercase inline-block mb-6">
              MMatos
            </Link>
            <p className="text-secondary-gray text-sm leading-relaxed mb-6">
              Arquitetura e Design de Interiores de alto padrão. Transformando espaços em experiências únicas e sofisticadas.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-white hover:text-secondary-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-white hover:text-secondary-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Home', 'Serviços', 'Projetos', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace('ç', 'c')}`}
                    className="text-secondary-gray hover:text-secondary-gold transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4 text-secondary-gray text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary-gold shrink-0 mt-0.5" />
                <a href="mailto:contato@mmatosarquitetura.com.br" className="hover:text-primary-white transition-colors">
                  contato@mmatosarquitetura.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary-gold shrink-0 mt-0.5" />
                <a href="tel:+5511999999999" className="hover:text-primary-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary-gold shrink-0 mt-0.5" />
                <span>São Paulo, SP<br />Atendimento em todo Brasil</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 uppercase tracking-wider">Fique Atualizado</h4>
            <p className="text-secondary-gray text-sm mb-4">
              Receba nossas novidades e inspirações exclusivas.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-transparent border border-secondary-gray/30 px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors text-primary-white"
                required
              />
              <button
                type="submit"
                className="bg-secondary-gold text-primary-white px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-secondary-gold/90 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-gray text-xs">
            © {new Date().getFullYear()} MMatos Arquitetura. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-secondary-gray text-xs">
            <a href="#" className="hover:text-primary-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
