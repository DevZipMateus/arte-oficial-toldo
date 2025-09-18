
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-arte-blue-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/05e7ad14-3936-4e92-847f-300a1eeb16da.png" 
                alt="Arte Toldo - Logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Arte Toldo</h3>
                <p className="text-blue-200 text-sm">Um legado em tendas e toldos</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Empresa séria e responsável com mais de 20 anos no mercado, oferecendo 
              produtos inovadores e tecnológicos. Serviço totalmente personalizado 
              para o que você desejar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/artetoldo_portovelho"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/19fJfhdKqo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                aria-label="Seguir no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Produtos', id: 'produtos' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="https://wa.me/5569993067833"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    (69) 99306-7833
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:artetoldocomercial@gmail.com"
                    className="text-blue-200 hover:text-white transition-colors break-words"
                  >
                    artetoldocomercial@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-200">
                    Rua Piauí, 5816 - Lagoa<br />
                    Porto Velho - RO<br />
                    76812-126
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blue-200 text-sm">
            <p>&copy; 2024 Arte Toldo Comércio, Serviços e Representação Ltda.</p>
            <p>CNPJ: 42.416.498/0001-18</p>
          </div>
          <div className="text-blue-200 text-sm text-center md:text-right">
            <p>Segunda a sexta: 8h às 18h</p>
            <p>Porto Velho - Rondônia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
