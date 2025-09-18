
import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Target, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experiência",
      description: "Mais de 20 anos no mercado, consolidando nossa expertise em toldos e coberturas."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisão",
      description: "Cada projeto é executado com máxima precisão e atenção aos detalhes."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Produtos inovadores e tecnológicos além do toldo tradicional."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compromisso",
      description: "Empresa séria e responsável, sempre priorizando a satisfação do cliente."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-arte-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arte-blue-royal mb-4">
            Sobre a Arte Toldo
          </h2>
          <p className="text-lg text-arte-gray max-w-3xl mx-auto">
            Conheça nossa história de dedicação e excelência no mercado de toldos e coberturas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-arte-blue-royal">
              Um legado construído com qualidade e confiança
            </h3>
            
            <p className="text-arte-gray leading-relaxed">
              A <strong>Arte Toldo</strong> é uma empresa consolidada no mercado há mais de 20 anos, 
              especializada em soluções completas para toldos, tendas e coberturas. Nossa trajetória 
              é marcada pela dedicação em oferecer produtos de alta qualidade e atendimento 
              personalizado.
            </p>
            
            <p className="text-arte-gray leading-relaxed">
              Somos uma empresa séria e responsável, comprometida em transformar espaços com 
              soluções inovadoras e tecnológicas. Cada projeto é desenvolvido pensando nas 
              necessidades específicas de nossos clientes, garantindo funcionalidade, 
              durabilidade e design.
            </p>
            
            <p className="text-arte-gray leading-relaxed">
              Oferecemos <strong>orçamento sem compromisso</strong> e nosso consultor vai até você 
              para apresentar as melhores opções. Nosso serviço é totalmente personalizado para 
              atender exatamente o que você deseja.
            </p>

            <div className="bg-arte-blue-royal/5 border-l-4 border-arte-blue-royal p-6 rounded-r-lg">
              <p className="text-arte-blue-royal font-semibold italic">
                "Nossa missão é transformar espaços com soluções de cobertura que unem 
                funcionalidade, beleza e durabilidade, sempre superando as expectativas 
                dos nossos clientes."
              </p>
            </div>
          </div>

          {/* Image with background */}
          <div className="relative">
            <div 
              className="rounded-2xl aspect-square flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
              style={{ backgroundImage: "url('/lovable-uploads/c6723a03-905d-4365-b5bf-d619e2175619.png')" }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-arte-blue-royal/30 backdrop-blur-[1px]"></div>
              
              {/* Content over the image */}
              <div className="text-center p-8 relative z-10">
                <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-12 h-12 text-arte-blue-royal" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 text-shadow-md">20+ Anos</h4>
                <p className="text-white/90 text-shadow-sm">de experiência no mercado</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-arte-blue-light/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-arte-blue-royal/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border-0 arte-shadow-soft">
              <div className="bg-arte-blue-royal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-arte-blue-royal">
                {value.icon}
              </div>
              <h4 className="font-bold text-arte-blue-royal mb-2">{value.title}</h4>
              <p className="text-arte-gray text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
