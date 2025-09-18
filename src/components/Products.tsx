import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Products = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-arte-blue-royal to-arte-blue-navy bg-clip-text text-transparent">
            Nosso Catálogo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra nossa ampla linha de produtos para proteção solar e cobertura. 
            Soluções personalizadas com materiais de alta qualidade e design moderno.
          </p>
        </div>

        {/* Preview das categorias principais */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Toldos Fixos</h3>
            <p className="text-muted-foreground mb-4">
              Soluções permanentes de proteção solar com máxima durabilidade
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              7+ modelos disponíveis
            </span>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Toldos Retráteis</h3>
            <p className="text-muted-foreground mb-4">
              Flexibilidade total com sistemas retráteis de alta qualidade
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              4+ modelos disponíveis
            </span>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-arte-blue-royal/20">
            <div className="w-16 h-16 bg-arte-blue-royal/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-arte-blue-royal" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-arte-blue-royal">Soluções Especiais</h3>
            <p className="text-muted-foreground mb-4">
              Sombrites, tendas, garagens e coberturas personalizadas
            </p>
            <span className="text-sm bg-arte-blue-royal/10 text-arte-blue-royal px-3 py-1 rounded-full">
              5+ categorias disponíveis
            </span>
          </Card>
        </div>

        {/* CTA Principal */}
        <div className="text-center">
          <div className="relative bg-arte-gradient-primary rounded-2xl p-12 text-white mb-8 overflow-hidden">
            {/* Efeito de partículas flutuantes */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-4 h-4 bg-white/20 rounded-full animate-float" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
              <div className="absolute w-3 h-3 bg-white/30 rounded-full animate-float" style={{top: '60%', right: '15%', animationDelay: '1s'}}></div>
              <div className="absolute w-5 h-5 bg-white/15 rounded-full animate-float" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
              <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-float" style={{top: '30%', right: '25%', animationDelay: '3s'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Eye className="w-10 h-10 text-white animate-bounce" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950 animate-fade-in">
                Explore Nosso Catálogo Completo
              </h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-zinc-950 animate-fade-in">
                Mais de 20 modelos diferentes de toldos, coberturas e soluções de proteção solar. 
                Encontre a opção perfeita para seu projeto.
              </p>
            </div>
            
            <Link 
              to="/catalog" 
              onClick={() => console.log('Navegando para /catalog')}
            >
              <Button 
                size="lg" 
                className="relative text-white font-bold px-12 py-6 bg-gradient-to-r from-arte-blue-royal via-arte-blue-navy to-arte-blue-royal bg-size-200 hover:bg-pos-100 text-xl group transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-arte-blue-royal/50 animate-pulse hover:animate-none border-2 border-white/30 hover:border-white/60 backdrop-blur-sm"
                style={{
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 50%',
                  boxShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 50%';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 50%';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="absolute inset-0 bg-white/10 rounded-md animate-pulse opacity-50"></div>
                <Eye className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Veja Nosso Catálogo</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </Button>
            </Link>
          </div>

          {/* Informações adicionais */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">20+</div>
              <div className="text-muted-foreground">Modelos Disponíveis</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">7</div>
              <div className="text-muted-foreground">Categorias de Produtos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-arte-blue-royal mb-1">100%</div>
              <div className="text-muted-foreground">Personalizável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;