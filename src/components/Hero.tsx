
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Award, Clock, ArrowRight } from 'lucide-react';

const Hero = React.memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = useMemo(() => [
    '/lovable-uploads/f8931bbc-c9bf-4630-bf1f-918b7f077936.png',
    '/lovable-uploads/b57419fb-9f55-4d7b-aac5-3a4714409270.png',
    '/lovable-uploads/b50a47d5-ac2a-4758-a950-83ea9498c293.png',
    '/lovable-uploads/6576fd76-e1f1-41f1-b90d-9e80ba9423d7.png',
    '/lovable-uploads/626b025d-4ab9-4ed8-bc5f-56f8ba335441.png'
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const features = useMemo(() => [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos com materiais de primeira qualidade e acabamento perfeito'
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Nosso consultor vai até você para orçamento sem compromisso'
    },
    {
      icon: Award,
      title: '20+ Anos',
      description: 'Experiência consolidada no mercado de toldos e coberturas'
    }
  ], []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
      </div>
      
      {/* Pattern overlay - reduced opacity for better image visibility */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Container with black semi-transparent background */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto w-full">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center bg-black/20 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 mb-4 sm:mb-6 lg:mb-8 animate-slide-up">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-xs sm:text-sm font-medium">Mais de 20 anos de experiência</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up text-shadow-lg">
              Um legado em
              <span className="block text-white">
                tendas e toldos
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up text-shadow-md px-2">
              Somos uma empresa séria e responsável com produtos inovadores e tecnológicos. 
              Oferecemos serviço totalmente personalizado para o que você desejar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up px-2">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-white text-arte-blue-royal hover:bg-blue-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group transition-all hover:scale-105 arte-shadow-soft will-change-transform"
                onClick={() => scrollToSection('contato')}
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto border-white/80 text-white bg-black/20 hover:bg-white hover:text-arte-blue-royal font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm transition-all hover:scale-105 will-change-transform"
                onClick={() => scrollToSection('produtos')}
              >
                Ver Produtos
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-in px-2">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black/20 backdrop-blur-sm rounded-full w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 will-change-transform">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base text-shadow-md">{feature.title}</h3>
                  <p className="text-blue-100 text-xs sm:text-sm text-shadow-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements - hidden on mobile for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 border border-white/20 rounded-full animate-float will-change-transform"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-12 h-12 lg:w-16 lg:h-16 border border-white/20 rounded-full animate-float will-change-transform" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute top-1/2 right-20 w-6 h-6 lg:w-8 lg:h-8 bg-white/10 rounded-full animate-float will-change-transform" style={{ animationDelay: '4s' }}></div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
