import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Ürün karuseli bileşeni
const ProductCarousel = ({ products }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-16">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <FaArrowLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 p-4"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

// Kategori karuseli bileşeni
const CategoryCarousel = ({ categories }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-8">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <FaArrowLeft />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 p-4"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-52 object-cover" /* Büyük resim kategorisi */
            />

            <div className="p-4">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};


// İki karuselli acente ana sayfası bileşeni
const AgencyHomePage = () => {
  const products = [
    {
      name: 'Tur 1',
      description: 'Güzel manzaraları keşfedin.',
      image: 'path/to/image1.jpg', // Uygun resim yollarını kullanın
    },
    {
      name: 'Tur 2',
      description: 'Şehir hayatını deneyimleyin.',
      image: 'path/to/image2.jpg', // Uygun resim yollarını kullanın
    },
    // Daha fazla tur ekleyin
  ];
  const reviews = [
    {
      image: 'path/to/review1.jpg', // Gerçek resim yolunu ekleyin
      comment: 'Bu tur harikaydı, kesinlikle tavsiye ederim!',
      rating: 5,
    },
    {
      image: 'path/to/review2.jpg', // Gerçek resim yolunu ekleyin
      comment: 'Turdan çok memnun kaldım, rehber harikaydı.',
      rating: 4,
    },
    {
      image: 'path/to/review3.jpg', // Gerçek resim yolunu ekleyin
      comment: 'Tur biraz sıkıcıydı, daha fazla etkinlik olabilirdi.',
      rating: 2,
    },
    // Daha fazla yorum ekleyin
  ];

  const categories = [
    {
      name: 'Doğa',
      description: 'Doğa ve açık hava maceraları.',
      image: 'path/to/doga.jpg', // Uygun resim yollarını kullanın
    },
    {
      name: 'Kültür',
      description: 'Kültürel alanları keşfedin.',
      image: 'path/to/kultur.jpg', // Uygun resim yollarını kullanın
    },
    {
      name: 'Macera',
      description: 'Heyecan verici macera turları.',
      image: 'path/to/macera.jpg', // Uygun resim yollarını kullanın
    },
    // Daha fazla kategori ekleyin
  ];

  return (
    <div className="container mx-auto px-4 mt-8 font-montserrat"> {/* Ana konteyner */}
      <div className="bg-sky-400 p-4 rounded-md shadow-md flex flex-col md:flex-row items-center">
        {/* Logo ve ana detaylar */}
        <div className="flex items-center space-x-3">
          <img
            src="path/to/your/logo.png"  /* Logo'nun gerçek yolunu ekleyin */
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-white text-xl">Acenta Adı</h1>
          <span className="bg-red-500 text-white px-2 py-1 rounded">9.2</span>
        </div>

        {/* Navigasyon bağlantıları */}
        <nav className="flex md:ml-auto space-x-4 mt-4 md:mt-0">
          <a href="#home" className="text-white hover:underline">
            ANA SAYFA
          </a>
          <a href="#products" className="text-white hover:underline">
            TÜM TURLAR
          </a>
          <a href="#profile" className="text-white hover:underline">
            SATICI PROFİLİ
          </a>
        </nav>

        {/* Arama alanı */}
        <div className="flex items-center mt-4 md:mt-0 md:ml-4">
          <input
            type="text"
            placeholder="Acentada Ara"
            className="bg-white border px-2 py-1 rounded"
          />
          <button className="bg-beyaz text-beyaz px-2 py-1 ml-1 rounded">
            🔍
          </button>
        </div>
      </div>

      {/* Tur ürünleri için karusel */}
      <ProductCarousel products={products} />

      {/* Büyük kartlar için kategori karuseli */}
      <CategoryCarousel categories={categories} />

    </div>
  );
};

export default AgencyHomePage;
