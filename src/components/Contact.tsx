import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
const Contact = () => {
  const contactInfo = [{
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefone',
    content: '(69) 99306-7833',
    link: 'https://wa.me/5569993067833',
    action: 'Ligar agora'
  }, {
    icon: <Mail className="w-6 h-6" />,
    title: 'E-mail',
    content: 'artetoldocomercial@gmail.com',
    link: 'mailto:artetoldocomercial@gmail.com',
    action: 'Enviar e-mail'
  }, {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Endereço',
    content: 'Rua Piauí, 5816 - Lagoa\nPorto Velho - RO, 76812-126',
    link: 'https://share.google/5aivFj5AS0SQsAMkg',
    action: 'Ver no mapa'
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: 'Horário',
    content: 'Segunda a sexta\n8h às 18h',
    link: null,
    action: null
  }];
  const socialLinks = [{
    icon: <Instagram className="w-5 h-5" />,
    name: 'Instagram',
    handle: '@artetoldo_portovelho',
    link: 'https://instagram.com/artetoldo_portovelho'
  }, {
    icon: <Facebook className="w-5 h-5" />,
    name: 'Facebook',
    handle: 'Arte Toldo',
    link: 'https://www.facebook.com/share/19fJfhdKqo/'
  }];
  return <section id="contato" className="py-20 bg-arte-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arte-blue-royal mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-arte-gray max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você. Solicite seu orçamento sem compromisso!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 arte-shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="bg-arte-blue-royal/10 rounded-full p-3 text-arte-blue-royal flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-arte-blue-royal mb-2">{info.title}</h3>
                      <p className="text-arte-gray whitespace-pre-line mb-4">{info.content}</p>
                      {info.link && info.action && <Button variant="outline" size="sm" className="border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white" onClick={() => window.open(info.link, '_blank')}>
                          {info.action}
                        </Button>}
                    </div>
                  </div>
                </Card>)}
            </div>

            {/* Social Media - Improved Mobile Layout */}
            <Card className="p-6 border-0 arte-shadow-soft">
              <h3 className="font-bold text-arte-blue-royal mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Siga-nos nas redes sociais
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {socialLinks.map((social, index) => <Button key={index} variant="outline" className="flex items-center gap-3 p-4 border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white w-full sm:w-auto justify-start sm:justify-center" onClick={() => window.open(social.link, '_blank')}>
                    {social.icon}
                    <div className="text-left">
                      <div className="font-semibold text-sm">{social.name}</div>
                      <div className="text-xs opacity-80">{social.handle}</div>
                    </div>
                  </Button>)}
              </div>
            </Card>
          </div>

          {/* CTA Card - Improved Colors */}
          <div className="space-y-6">
            <Card className="p-8 text-center border-0 arte-shadow-strong bg-arte-gradient-primary text-white">
              <div className="mb-6">
                <MessageCircle className="w-16 h-16 mx-auto mb-4 text-white bg-lime-600" />
                <h3 className="text-2xl font-bold mb-2 text-gray-950">Orçamento Grátis</h3>
                <p className="text-zinc-950">
                  Nosso consultor vai até você para apresentar as melhores soluções
                </p>
              </div>
              
              <Button size="lg" className="w-full bg-white text-arte-blue-royal hover:bg-white/90 hover:text-arte-blue-navy font-semibold mb-4 transition-all duration-200" onClick={() => window.open('https://wa.me/5569993067833?text=Olá! Gostaria de solicitar um orçamento para toldo.', '_blank')}>
                <MessageCircle className="w-5 h-5 mr-2 text-arte-blue-royal" />
                WhatsApp
              </Button>
              
              <Button variant="outline" size="lg" onClick={() => window.open('tel:+5569993067833', '_blank')} className="w-full border-2 border-white text-white hover:text-arte-blue-royal transition-all duration-200 bg-zinc-600 hover:bg-zinc-500">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </Card>

            {/* Map */}
            <Card className="p-6 border-0 arte-shadow-soft">
              <h3 className="font-bold text-arte-blue-royal mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Nossa Localização
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-arte-gray-light">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1234567890123!2d-63.87654321!3d-8.76543210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDUnNTEuNiJTIDYzwrA1Mic0Ny41Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Arte Toldo"></iframe>
              </div>
              <Button variant="outline" className="w-full mt-4 border-arte-blue-royal text-arte-blue-royal hover:bg-arte-blue-royal hover:text-white" onClick={() => window.open('https://share.google/5aivFj5AS0SQsAMkg', '_blank')}>
                Abrir no Google Maps
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;