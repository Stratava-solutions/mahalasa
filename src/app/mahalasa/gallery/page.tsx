
'use client'
import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/images/temple/temple-main.jpg',
    alt: 'Temple Main View',
    category: 'temple',
    fallback: '/god2.jpg'
  },
  {
    id: 2,
    src: '/images/deity/mahalasa-deity.jpg',
    alt: 'Goddess Mahalasa Narayani Deity',
    category: 'deity',
    fallback: '/god.jpg'
  },
  {
    id: 3,
    src: '/god.jpg',
    alt: 'Sacred Deity View',
    category: 'deity',
    fallback: '/god.jpg'
  },
  {
    id: 4,
    src: '/god2.jpg',
    alt: 'Divine Darshan',
    category: 'deity',
    fallback: '/god2.jpg'
  },
  {
    id: 5,
    src: '/images/temple/temple-interior.jpg',
    alt: 'Temple Interior',
    category: 'temple',
    fallback: '/header-image.jpg'
  },
  {
    id: 6,
    src: '/images/festivals/festival-celebration.jpg',
    alt: 'Festival Celebration',
    category: 'festivals',
    fallback: '/header-image.jpg'
  },
  {
    id: 7,
    src: '/header-image.jpg',
    alt: 'Temple Architecture',
    category: 'temple',
    fallback: '/header-image.jpg'
  },
];

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'temple', name: 'Temple' },
  { id: 'deity', name: 'Deity' },
  { id: 'festivals', name: 'Festivals' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }));
  };

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedImg = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="min-h-screen bg-orange-50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 md:mb-8 text-center">
          Photo Gallery
        </h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="aspect-square bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openModal(image.id)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={imageErrors[image.id] ? image.fallback : image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError(image.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImg && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative aspect-video">
                <Image
                  src={imageErrors[selectedImg.id] ? selectedImg.fallback : selectedImg.src}
                  alt={selectedImg.alt}
                  fill
                  className="object-contain"
                  onError={() => handleImageError(selectedImg.id)}
                />
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{selectedImg.alt}</h3>
                <p className="text-sm text-gray-600 capitalize">{selectedImg.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Instructions for adding images */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">
            📸 Add Your Temple Images
          </h2>
          <div className="space-y-3 text-gray-700">
            <p className="font-medium">To add your temple images:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Copy your temple images to: <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/images/temple/</code></li>
              <li>Copy deity images to: <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/images/deity/</code></li>
              <li>Copy festival images to: <code className="bg-gray-100 px-2 py-1 rounded text-xs">public/images/festivals/</code></li>
              <li>Name your files: <code className="bg-gray-100 px-2 py-1 rounded text-xs">temple-main.jpg</code>, <code className="bg-gray-100 px-2 py-1 rounded text-xs">mahalasa-deity.jpg</code>, etc.</li>
            </ol>
            <p className="text-sm text-gray-600 mt-4">
              💡 The gallery will automatically use fallback images until you add your own temple photos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
