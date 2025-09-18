import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface ImageData {
  [key: string]: string[];
}

const CatalogoPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Image data simplificado usando apenas a imagem real que existe
  const imageData: ImageData = {
    // Para demonstração, usando uma imagem placeholder que existe
    'toldo-lua-lona': [
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_0182.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_3094.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_3095.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_3097.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_3786.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_4412.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_4610.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de IMG_8423.jpg',
      '/lovable-uploads/toldo fixo/toldo lua lona/Cópia de dcd43dad-a635-425e-b561-9afaeb24bee9.JPG'
    ],
    'toldo-lua-policarbonato': [
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de IMG_1038.jpg',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de IMG_2124.jpg',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de IMG_4170.jpg',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de IMG_8717.jpg',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de IMG_8763.jpg',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de dba4133b-32e4-43f9-844c-7755f605d966.JPG',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de ec39413f-bb6e-455e-89d8-eda9a8bb6679.JPG',
      '/lovable-uploads/toldo fixo/toldo lua em policarboneto/Cópia de ff5344d1-c824-4e38-94c7-389fa7cb3759.JPG'
    ],
    'sanefa': [
      '/lovable-uploads/toldoretratil/sanefa/Arquivo_001.jpeg'
    ],
    // Imagens do toldo bola do GitHub
    'toldo-bola': [
      '/lovable-uploads/toldo fixo/toldo bola/Cópia de IMG_3647.jpg',
      '/lovable-uploads/toldo fixo/toldo bola/Cópia de IMG_4035.jpg',
      '/lovable-uploads/toldo fixo/toldo bola/Cópia de IMG_4046.jpg',
      '/lovable-uploads/toldo fixo/toldo bola/Cópia de IMG_9613.jpg',
      '/lovable-uploads/toldo fixo/toldo bola/Cópia de IMG_9614.jpg'
    ],
    'toldo-curvo-lona': [
      '/lovable-uploads/toldo fixo/toldo curvo lona/Cópia de A7BA7293-C6A7-40BA-B0E9-2BD700AC281A.JPG',
      '/lovable-uploads/toldo fixo/toldo curvo lona/Cópia de IMG_1633.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/Cópia de IMG_1740.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/IMG-20250815-WA0178.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/IMG-20250815-WA0179.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/IMG-20250815-WA0180.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/IMG-20250903-WA0119.jpg',
      '/lovable-uploads/toldo fixo/toldo curvo lona/IMG-20250903-WA0120.jpg'
    ],
    'toldo-fixo-lona': [
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de 1a9ad0fc-e1f1-4f9e-a5fc-e57b66ecf5f8.JPG',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de A4A2D929-B852-440D-B003-C0FBAC1FEDD5.JPG',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de IMG_3388.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de IMG_3509.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de IMG_3522.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de IMG_4266.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de IMG_7454.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de PHOTO-2023-07-14-16-23-30.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de PHOTO-2024-02-27-17-18-20.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo lona/Cópia de PHOTO-2024-03-01-18-45-00.jpg'
    ],
    'passarela-policarbonato': [
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/Cópia de 05645B1C-1ADF-4D17-A1B4-EFC87A7AB006.JPG',
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/Cópia de IMG_3034.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/Cópia de f2af55e5-7209-4a86-8c7e-b65767941a5f.JPG',
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/IMG-20250704-WA0167.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/IMG-20250704-WA0168.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela em policarboneto/IMG-20250704-WA0170.jpg'
    ],
    'passarela-lona': [
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_1835.JPG',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_3101.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_3102.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_3116.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_3121.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_3689.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/Cópia de IMG_9734.jpg',
      '/lovable-uploads/toldo fixo/toldo passarela lona/IMG-20250829-WA0211.jpg'
    ],
    'toldo-reto-policarbonato': [
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de 1a9ad0fc-e1f1-4f9e-a5fc-e57b66ecf5f8.JPG',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de A4A2D929-B852-440D-B003-C0FBAC1FEDD5.JPG',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_3208.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_3211.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_3388.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_3509.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_3522.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_4266.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de IMG_7454.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de PHOTO-2023-07-14-16-23-30.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de PHOTO-2024-02-27-17-18-20.jpg',
      '/lovable-uploads/toldo fixo/toldo fixo policarboneto/Cópia de PHOTO-2024-03-01-18-45-00.jpg'
    ],
    'aluminio': ['/placeholder.svg'],
    'policarbonato': ['/placeholder.svg'],
    'cobertura-inversor-solar': ['/placeholder.svg'],
    'garagem-telhas': ['/placeholder.svg'],
    'modelo-francis': ['/placeholder.svg'],
    'sombrites': ['/placeholder.svg'],
    'tendas': ['/placeholder.svg'],
  };

  const categories = [
    {
      id: 'toldo-fixo',
      label: 'Toldo Fixo',
      subcategories: [
        { id: 'toldo-bola', label: 'Toldo Bola' },
        { id: 'toldo-curvo-lona', label: 'Toldo Curvo de Lona' },
        { id: 'toldo-fixo-lona', label: 'Toldo Fixo de Lona' },
        { id: 'toldo-lua-lona', label: 'Toldo Lua de Lona' },
        { id: 'toldo-lua-policarbonato', label: 'Toldo Lua em Policarbonato' },
        { id: 'passarela-policarbonato', label: 'Passarela Policarbonato' },
        { id: 'passarela-lona', label: 'Passarela Lona' },
        { id: 'toldo-reto-policarbonato', label: 'Toldo Reto Policarbonato' },
      ]
    },
    {
      id: 'toldos-retratil',
      label: 'Toldos Retrátil',
      subcategories: [
        { id: 'aluminio', label: 'Alumínio' },
        { id: 'policarbonato', label: 'Policarbonato' },
        { id: 'sanefa', label: 'Sanefa' },
      ]
    },
    {
      id: 'cobertura-inversor-solar',
      label: 'Cobertura para Inversor Solar',
    },
    {
      id: 'garagem-telhas',
      label: 'Garagem de Telhas',
    },
    {
      id: 'modelo-francis',
      label: 'Modelo FRANCIS',
    },
    {
      id: 'sombrites',
      label: 'Sombrites',
    },
    {
      id: 'tendas',
      label: 'Tendas',
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    
    if (category?.subcategories) {
      // Has subcategories - toggle expansion
      const newExpanded = new Set(expandedCategories);
      if (newExpanded.has(categoryId)) {
        newExpanded.delete(categoryId);
      } else {
        newExpanded.add(categoryId);
      }
      setExpandedCategories(newExpanded);
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      setCurrentImages([]);
    } else {
      // No subcategories - show images directly
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      const images = imageData[categoryId] || [];
      setCurrentImages(images);
      setExpandedCategories(new Set());
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    const images = imageData[subcategoryId] || [];
    setCurrentImages(images);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-primary font-medium">Catálogo</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Header da página */}
          <div className="text-center mb-12">
            <Link to="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Nosso Catálogo de Produtos
            </h1>
          </div>

          {/* Catalog Container */}
          <div className="max-w-4xl mx-auto bg-card p-6 rounded-lg shadow-lg">
            {/* Categories List */}
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`w-full flex items-center justify-between p-4 text-left border rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted hover:bg-muted/80 border-border'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    {category.subcategories && (
                      expandedCategories.has(category.id) ? 
                        <ChevronDown className="w-5 h-5" /> : 
                        <ChevronRight className="w-5 h-5" />
                    )}
                  </button>

                  {/* Subcategories */}
                  {category.subcategories && expandedCategories.has(category.id) && (
                    <ul className="mt-2 ml-8 space-y-2">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.id}>
                          <button
                            onClick={() => handleSubcategoryClick(subcategory.id)}
                            className={`w-full p-3 text-left border rounded-lg transition-all duration-300 ${
                              activeSubcategory === subcategory.id
                                ? 'bg-primary/80 text-primary-foreground border-primary'
                                : 'bg-background hover:bg-muted border-border'
                            }`}
                          >
                            {subcategory.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Image Gallery */}
            {currentImages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentImages.map((imageSrc, index) => (
                    <div key={index} className="group">
                      <img
                        src={imageSrc}
                        alt={`Produto ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/300x200.png?text=Imagem+${index + 1}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CatalogoPage;