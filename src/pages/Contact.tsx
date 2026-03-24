import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', project: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-support-light">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-dark mb-6">Contato</h1>
            <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
              Estamos prontos para ouvir sobre o seu próximo projeto. Entre em contato conosco para agendar uma consulta.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn direction="right">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-dark mb-8">Vamos Conversar</h2>
              <p className="text-secondary-gray leading-relaxed mb-12">
                Preencha o formulário ao lado ou utilize nossos canais de atendimento direto. Será um prazer entender suas necessidades e apresentar como podemos transformar seu espaço.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-support-beige flex items-center justify-center text-secondary-gold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary-dark mb-1">Telefone / WhatsApp</h4>
                    <p className="text-secondary-gray">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-support-beige flex items-center justify-center text-secondary-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary-dark mb-1">E-mail</h4>
                    <p className="text-secondary-gray">contato@mmatosarquitetura.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-support-beige flex items-center justify-center text-secondary-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary-dark mb-1">Escritório</h4>
                    <p className="text-secondary-gray">Av. Brigadeiro Faria Lima, 1000<br />Jardim Paulistano, São Paulo - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-support-beige flex items-center justify-center text-secondary-gold shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-primary-dark mb-1">Horário de Atendimento</h4>
                    <p className="text-secondary-gray">Segunda a Sexta: 09h às 18h<br />Atendimento com hora marcada</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-support-light p-8 md:p-12 rounded-sm relative overflow-hidden">
                <h3 className="font-serif text-2xl font-bold text-primary-dark mb-8">Envie uma Mensagem</h3>
                
                {isSuccess ? (
                  <div className="absolute inset-0 bg-support-light z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-primary-dark mb-2">Mensagem Enviada!</h4>
                    <p className="text-secondary-gray">
                      Agradecemos o seu contato. Retornaremos o mais breve possível.
                    </p>
                  </div>
                ) : null}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide">Nome Completo *</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-white border border-secondary-gray/20 px-4 py-3 focus:outline-none focus:border-secondary-gold transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide">Telefone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-primary-white border border-secondary-gray/20 px-4 py-3 focus:outline-none focus:border-secondary-gold transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide">E-mail *</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-white border border-secondary-gray/20 px-4 py-3 focus:outline-none focus:border-secondary-gold transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide">Tipo de Projeto</label>
                    <select 
                      id="project" 
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-primary-white border border-secondary-gray/20 px-4 py-3 focus:outline-none focus:border-secondary-gold transition-colors text-secondary-gray"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="medico">Clínica / Consultório</option>
                      <option value="corporativo">Corporativo</option>
                      <option value="interiores">Design de Interiores</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2 uppercase tracking-wide">Mensagem *</label>
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-primary-white border border-secondary-gray/20 px-4 py-3 focus:outline-none focus:border-secondary-gold transition-colors resize-none"
                      placeholder="Conte-nos um pouco sobre o seu projeto..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary-gold text-primary-white px-8 py-4 font-semibold uppercase tracking-wide text-sm hover:bg-secondary-gold/90 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-support-light relative">
        <div className="absolute inset-0 bg-primary-dark/5 flex items-center justify-center">
          <p className="text-secondary-gray font-serif italic">Mapa Interativo (Integração Google Maps)</p>
        </div>
      </section>
    </div>
  );
}
