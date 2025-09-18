
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const WorkGallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const workImages = [
    {
      src: "/lovable-uploads/1b168439-d266-41aa-b91f-f6244876818a.png",
      alt: "Toldo retrátil vermelho instalado"
    },
    {
      src: "/lovable-uploads/aab34821-aa86-4295-b1a9-6e8ec903cfa9.png",
      alt: "Cobertura em policarbonato com estrutura metálica"
    },
    {
      src: "/lovable-uploads/beb3b311-57f3-4094-b0c6-da6b697018ce.png",
      alt: "Toldo de passarela com material translúcido"
    },
    {
      src: "/lovable-uploads/373ca068-3c3e-4738-83d4-06a68db9905d.png",
      alt: "Cobertura estrutural com policarbonato alveolar"
    },
    {
      src: "/lovable-uploads/dc3f0fd7-aad9-4157-b947-d267c639fa8e.png",
      alt: "Toldo para garagem com cortinas laterais"
    },
    {
      src: "/lovable-uploads/61f9b0be-9f5c-48d6-98e8-c690835899fd.png",
      alt: "Cobertura curva em policarbonato"
    },
    {
      src: "/lovable-uploads/0c874ae6-3d96-4498-970c-4df75e424bd7.png",
      alt: "Pergolado com cobertura em policarbonato"
    },
    {
      src: "/lovable-uploads/bf55e8e8-a907-413b-a9bd-9983f4256d01.png",
      alt: "Cobertura para estacionamento"
    },
    {
      src: "/lovable-uploads/fdceb9b1-28bd-4783-acbe-bb44770bd811.png",
      alt: "Toldo retrátil moderno instalado"
    },
    {
      src: "/lovable-uploads/95aed9f6-52fd-4127-a7dd-d8f5f2f28027.png",
      alt: "Toldo retrátil lateral instalado em área externa"
    },
    {
      src: "/lovable-uploads/3a4b91a3-6285-4413-b90a-adca7bccf25c.png",
      alt: "Cortinas laterais para varanda com estrutura em alvenaria"
    },
    {
      src: "/lovable-uploads/763c986a-ba23-409b-a5b4-198dc3d8cbd3.png",
      alt: "Cobertura metálica para garagem com estrutura robusta"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="trabalhos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-arte-blue-royal mb-4">
            Um Pouco de Nossos Trabalhos
          </h2>
          <p className="text-lg text-arte-gray max-w-3xl mx-auto">
            Confira alguns dos projetos que realizamos com qualidade e excelência. 
            Cada trabalho é único e personalizado para atender as necessidades específicas de nossos clientes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {workImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 overflow-hidden arte-shadow-soft hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-arte-gray mb-6">
            Gostou do que viu? Entre em contato conosco para um orçamento personalizado!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-arte-blue-royal hover:bg-arte-blue-navy text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
