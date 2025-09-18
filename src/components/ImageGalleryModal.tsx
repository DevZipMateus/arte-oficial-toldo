import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryModalProps {
  trigger: React.ReactNode;
  title: string;
  images: string[];
}

const ImageGalleryModal = ({ trigger, title, images }: ImageGalleryModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [validImages, setValidImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Carrega e valida as imagens em lotes otimizados
  React.useEffect(() => {
    if (isOpen && images.length > 0) {
      setLoading(true);
      console.log('Validating images in batches:', images.length, 'total');
      
      const checkImagesInBatches = async () => {
        const validImageUrls: string[] = [];
        const batchSize = 3; // Reduzido para 3 por lote
        const maxImages = Math.min(images.length, 15); // Máximo 15 imagens
        
        for (let i = 0; i < maxImages; i += batchSize) {
          const batch = images.slice(i, i + batchSize);
          console.log(`Checking batch ${Math.floor(i/batchSize) + 1}:`, batch);
          
          const promises = batch.map(async (imageUrl) => {
            try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 2000); // 2s timeout
              
              const response = await fetch(imageUrl, { 
                method: 'HEAD',
                signal: controller.signal
              });
              clearTimeout(timeoutId);
              
              if (response.ok) {
                console.log('✓ Valid image:', imageUrl);
                return imageUrl;
              }
            } catch (error) {
              console.log('✗ Image failed:', imageUrl);
            }
            return null;
          });
          
          const results = await Promise.all(promises);
          const validBatch = results.filter((url): url is string => url !== null);
          validImageUrls.push(...validBatch);
          
          // Delay entre lotes para não sobrecarregar
          if (i + batchSize < maxImages) {
            await new Promise(resolve => setTimeout(resolve, 200));
          }
        }
        
        console.log('Final valid images found:', validImageUrls.length);
        setValidImages(validImageUrls);
        setLoading(false);
        setCurrentImageIndex(0);
      };
      
      checkImagesInBatches();
    }
  }, [isOpen, images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  // Sempre renderizar o modal, mesmo sem imagens válidas

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-xl font-bold text-arte-blue-royal">
            {title} - Galeria de Imagens
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Visualize as imagens do produto selecionado
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 pt-2">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-arte-blue-royal"></div>
              <div className="text-center">
                <span className="text-muted-foreground">Carregando imagens...</span>
                <p className="text-xs text-muted-foreground mt-1">Validando disponibilidade das imagens</p>
              </div>
            </div>
          ) : validImages.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Nenhuma imagem encontrada para este produto.
            </div>
          ) : (
            <>
              <div className="relative w-full h-full max-h-[60vh] flex items-center justify-center">
                <img
                  src={validImages[currentImageIndex]}
                  alt={`${title} - Imagem ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                
                {validImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
              
              {validImages.length > 1 && (
                <div className="w-full mt-4">
                  <div className="flex gap-2 overflow-x-auto pb-2 max-w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <div className="flex gap-2 min-w-max px-2">
                      {validImages.slice(0, 10).map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            index === currentImageIndex 
                              ? 'border-arte-blue-royal shadow-lg scale-105' 
                              : 'border-gray-200 hover:border-arte-blue-royal/50'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Miniatura ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.svg';
                            }}
                          />
                        </button>
                      ))}
                      {validImages.length > 10 && (
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-xs text-gray-500">
                          +{validImages.length - 10}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-center mt-4 text-sm text-muted-foreground">
                {validImages.length > 1 && `Imagem ${currentImageIndex + 1} de ${validImages.length}`}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryModal;