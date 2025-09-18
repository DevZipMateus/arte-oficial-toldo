import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';


const CatalogoPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper function to encode image paths
  const getImagePath = (folder: string, subfolder: string, filename: string) => {
    return `/lovable-uploads/${encodeURIComponent(folder)}/${encodeURIComponent(subfolder)}/${encodeURIComponent(filename)}`;
  };

  // Image data mapping based on folder structure  
  const imageData: Record<string, string[]> = {
    // Toldo Fixo subcategories
    'toldo-bola': [
      getImagePath('toldo fixo', 'toldo bola', 'Cópia de IMG_3647.jpg'),
      getImagePath('toldo fixo', 'toldo bola', 'Cópia de IMG_4035.jpg'),
      getImagePath('toldo fixo', 'toldo bola', 'Cópia de IMG_4046.jpg'),
      getImagePath('toldo fixo', 'toldo bola', 'Cópia de IMG_9613.jpg'),
      getImagePath('toldo fixo', 'toldo bola', 'Cópia de IMG_9614.jpg')
    ],
    'toldo-curvo-lona': [
      getImagePath('toldo fixo', 'toldo curvo lona', 'Cópia de A7BA7293-C6A7-40BA-B0E9-2BD700AC281A.JPG'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'Cópia de IMG_1633.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'Cópia de IMG_1740.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'IMG-20250815-WA0178.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'IMG-20250815-WA0179.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'IMG-20250815-WA0180.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'IMG-20250903-WA0119.jpg'),
      getImagePath('toldo fixo', 'toldo curvo lona', 'IMG-20250903-WA0120.jpg')
    ],
    'toldo-fixo-lona': [
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de 1a9ad0fc-e1f1-4f9e-a5fc-e57b66ecf5f8.JPG'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de A4A2D929-B852-440D-B003-C0FBAC1FEDD5.JPG'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de IMG_3388.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de IMG_3509.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de IMG_3522.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de IMG_4266.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de IMG_7454.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de PHOTO-2023-07-14-16-23-30.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de PHOTO-2024-02-27-17-18-20.jpg'),
      getImagePath('toldo fixo', 'toldo fixo lona', 'Cópia de PHOTO-2024-03-01-18-45-00.jpg')
    ],
    'toldo-lua-lona': [
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_0182.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_3094.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_3095.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_3097.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_3786.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_4412.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_4610.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de IMG_8423.jpg'),
      getImagePath('toldo fixo', 'toldo lua lona', 'Cópia de dcd43dad-a635-425e-b561-9afaeb24bee9.JPG')
    ],
    'toldo-lua-policarbonato': [
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de IMG_1038.jpg'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de IMG_2124.jpg'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de IMG_4170.jpg'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de IMG_8717.jpg'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de IMG_8763.jpg'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de dba4133b-32e4-43f9-844c-7755f605d966.JPG'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de ec39413f-bb6e-455e-89d8-eda9a8bb6679.JPG'),
      getImagePath('toldo fixo', 'toldo lua em policarboneto', 'Cópia de ff5344d1-c824-4e38-94c7-389fa7cb3759.JPG')
    ],
    'passarela-lona': [
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_1835.JPG'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_3101.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_3102.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_3116.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_3121.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_3689.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'Cópia de IMG_9734.jpg'),
      getImagePath('toldo fixo', 'toldo passarela lona', 'IMG-20250829-WA0211.jpg')
    ],
    'passarela-policarbonato': [
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'Cópia de 05645B1C-1ADF-4D17-A1B4-EFC87A7AB006.JPG'),
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'Cópia de IMG_3034.jpg'),
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'Cópia de f2af55e5-7209-4a86-8c7e-b65767941a5f.JPG'),
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'IMG-20250704-WA0167.jpg'),
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'IMG-20250704-WA0168.jpg'),
      getImagePath('toldo fixo', 'toldo passarela em policarboneto', 'IMG-20250704-WA0170.jpg')
    ],
    'toldo-reto-policarbonato': [
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de 1a9ad0fc-e1f1-4f9e-a5fc-e57b66ecf5f8.JPG'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de A4A2D929-B852-440D-B003-C0FBAC1FEDD5.JPG'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_3208.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_3211.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_3388.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_3509.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_3522.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_4266.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de IMG_7454.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de PHOTO-2023-07-14-16-23-30.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de PHOTO-2024-02-27-17-18-20.jpg'),
      getImagePath('toldo fixo', 'toldo fixo policarboneto', 'Cópia de PHOTO-2024-03-01-18-45-00.jpg')
    ],
    // Toldos Retrátil subcategories
    'aluminio': [
      getImagePath('toldo retratil', 'toldo retratil aluminio', 'Cópia de IMG_2860.jpg'),
      getImagePath('toldo retratil', 'toldo retratil aluminio', 'Cópia de IMG_4125.jpg'),
      getImagePath('toldo retratil', 'toldo retratil aluminio', 'Cópia de IMG_4127.jpg'),
      getImagePath('toldo retratil', 'toldo retratil aluminio', 'Cópia de IMG_4222.jpg'),
      getImagePath('toldo retratil', 'toldo retratil aluminio', 'Cópia de IMG_7729.jpg')
    ],
    'policarbonato': [
      getImagePath('toldo retratil', 'retratil policarboneto', 'Cópia de 0DF4C991-9536-4C27-A493-0E28E27F2132.JPG'),
      getImagePath('toldo retratil', 'retratil policarboneto', 'Cópia de 2d0250b0-04ce-42fa-8b71-227ae9bede2d.JPG'),
      getImagePath('toldo retratil', 'retratil policarboneto', 'Cópia de ED406E46-B2C2-4E62-8BC9-AA3C490DA5C6.JPG'),
      getImagePath('toldo retratil', 'retratil policarboneto', 'Cópia de IMG_2708.jpg'),
      getImagePath('toldo retratil', 'retratil policarboneto', 'Cópia de bad28edf-7dd7-4795-884e-661b4ead3c3c.JPG')
    ],
    'sanefa': [
      getImagePath('toldo retratil', 'retratil sanefa', 'Cópia de IMG_8732.jpg'),
      getImagePath('toldo retratil', 'retratil sanefa', 'Cópia de PHOTO-2022-11-19-11-41-22.jpg'),
      getImagePath('toldo retratil', 'retratil sanefa', 'Cópia de PHOTO-2022-12-01-09-36-55.jpg'),
      getImagePath('toldo retratil', 'retratil sanefa', 'Cópia de PHOTO-2024-02-07-17-26-13.jpg')
    ],
    // Single categories  
    'cobertura-inversor-solar': [
      `/lovable-uploads/${encodeURIComponent('coberturainversor')}/${encodeURIComponent('Cópia de IMG_3073.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('coberturainversor')}/${encodeURIComponent('Cópia de IMG_3166.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('coberturainversor')}/${encodeURIComponent('Cópia de IMG_3168.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('coberturainversor')}/${encodeURIComponent('Cópia de IMG_4931.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('coberturainversor')}/${encodeURIComponent('Cópia de IMG_4939.jpg')}`
    ],
    'garagem-telhas': [
      getImagePath('garagem com telha', '', 'Cópia de 5d06d2d6-e2d1-4baf-b201-14067a64dbe0.JPG'),
      getImagePath('garagem com telha', '', 'Cópia de IMG_3752.jpg'),
      getImagePath('garagem com telha', '', 'Cópia de IMG_3755.jpg'),
      getImagePath('garagem com telha', '', 'Cópia de PHOTO-2023-03-21-11-19-27.jpg'),
      getImagePath('garagem com telha', '', 'Cópia de PHOTO-2023-03-21-11-19-30.jpg')
    ],
    'modelo-francis': [
      `/lovable-uploads/${encodeURIComponent('modelofrancis')}/${encodeURIComponent('Cópia de IMG_9229.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('modelofrancis')}/${encodeURIComponent('Cópia de IMG_9241.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('modelofrancis')}/${encodeURIComponent('Cópia de PHOTO-2023-12-12-19-33-27.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('modelofrancis')}/${encodeURIComponent('Cópia de PHOTO-2024-05-04-14-10-44.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('modelofrancis')}/${encodeURIComponent('Cópia de PHOTO-2024-11-12-17-30-24.jpg')}`
    ],
    'sombrites': [
      `/lovable-uploads/${encodeURIComponent('sombrite')}/${encodeURIComponent('Cópia de D24EAF50-6C61-4823-A98F-9F1252AC7A85.JPG')}`,
      `/lovable-uploads/${encodeURIComponent('sombrite')}/${encodeURIComponent('Cópia de IMG_5276.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('sombrite')}/${encodeURIComponent('Cópia de PHOTO-2022-12-13-11-47-53.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('sombrite')}/${encodeURIComponent('Cópia de PHOTO-2022-12-13-11-47-54.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('sombrite')}/${encodeURIComponent('Cópia de PHOTO-2023-01-10-09-53-11.jpg')}`
    ],
    'tendas': [
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de F2392E5E-3B54-4925-B148-8F990FE581F9.JPG')}`,
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de IMG_2984.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de IMG_2985.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de IMG_2986.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de IMG_2987.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('tendas')}/${encodeURIComponent('Cópia de PHOTO-2023-01-11-16-13-34.jpg')}`
    ],
    'pergolado': [
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de IMG_7686.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de PHOTO-2022-12-20-20-14-25.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de PHOTO-2024-02-23-17-55-44.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de PHOTO-2024-02-23-17-55-46.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de PHOTO-2024-05-09-18-33-08.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de PHOTO-2024-10-21-17-30-43.jpg')}`,
      `/lovable-uploads/${encodeURIComponent('pergolado')}/${encodeURIComponent('Cópia de e779b0e7-a6ef-4b14-9993-0881b86a0eb1.JPG')}`
    ]
  };

  const loadImages = async (key: string) => {
    setIsLoading(true);
    const images = imageData[key] || [];
    setCurrentImages(images);
    setSelectedImageIndex(0);
    setIsLoading(false);
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
      id: 'pergolado',
      label: 'Pergolado',
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
        setCurrentImages([]);
      } else {
        newExpanded.add(categoryId);
      }
      setExpandedCategories(newExpanded);
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
    } else {
      // No subcategories - load images directly
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
      setExpandedCategories(new Set());
      loadImages(categoryId);
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    loadImages(subcategoryId);
  };

  const nextImage = () => {
    if (currentImages.length > 0) {
      setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (currentImages.length > 0) {
      setSelectedImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    }
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
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Categories List */}
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary">Categorias</h2>
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
              </div>

              {/* Image Gallery */}
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-primary">Galeria de Imagens</h2>
                
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : currentImages.length > 0 ? (
                  <div className="space-y-4">
                    {/* Main Image */}
                    <div className="relative group">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative cursor-pointer overflow-hidden rounded-lg">
                            <img
                              src={currentImages[selectedImageIndex]}
                              alt={`Imagem ${selectedImageIndex + 1}`}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white font-medium">Clique para ampliar</span>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full">
                          <div className="relative">
                            <img
                              src={currentImages[selectedImageIndex]}
                              alt={`Imagem ${selectedImageIndex + 1}`}
                              className="w-full h-auto max-h-[80vh] object-contain"
                              onError={(e) => {
                                e.currentTarget.src = '/placeholder.svg';
                              }}
                            />
                            
                            {/* Navigation in modal */}
                            {currentImages.length > 1 && (
                              <>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={prevImage}
                                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                                >
                                  <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={nextImage}
                                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                                >
                                  <ChevronRight className="w-4 h-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      {/* Navigation buttons */}
                      {currentImages.length > 1 && (
                        <>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>

                    {/* Image counter and thumbnails */}
                    {currentImages.length > 1 && (
                      <>
                        <div className="text-center text-sm text-muted-foreground">
                          {selectedImageIndex + 1} de {currentImages.length}
                        </div>
                        
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-24 overflow-y-auto">
                          {currentImages.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                                index === selectedImageIndex
                                  ? 'border-primary shadow-md'
                                  : 'border-transparent hover:border-primary/50'
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder.svg';
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-64 text-muted-foreground">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <p>Selecione uma categoria para ver as imagens</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CatalogoPage;