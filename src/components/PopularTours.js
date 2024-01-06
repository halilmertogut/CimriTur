import React from 'react';
import { useRef } from 'react';

const products = [
  { id: 1, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 2, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 3, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },
  { id: 4, name: 'Product name', variant: 'Variant', price: '$55' },

];

const ProductCard = ({ name, variant, price }) => (
  <div className="bg-gray-200 p-4 flex flex-col items-center">
    <div className="bg-gray-400 h-40 w-48 mb-2"></div> {/* Ürün resmi yer tutucu */}
    <h3 className="font-bold">{name}</h3>
    <p>{variant}</p>
    <span className="text-gray-800">{price}</span>
  </div>
);

const PopularTours = () => {
  const scrollContainer = useRef(null);

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center bg-transparent pt-6 pb-6">
      <div className="bg-white rounded-md shadow-lg w-full max-w-screen-2xl mx-4 h-[420px]">
        <div className="overflow-hidden rounded-sm">
          <div className="flex justify-between items-center mb-4 px-6">
            <h2 className="text-2xl font-bold mt-4 text-center">Popüler Turlar</h2>
            <button className="text-blue-600 hover:text-blue-800 transition duration-300 text-center">
              View all
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto px-6 pt-10" ref={scrollContainer}>
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2 pt-4 px-6">
            <button onClick={scrollLeft}>&lt;</button>
            <button onClick={scrollRight}>&gt;</button> 
          </div>
        </div>
      </div>
    </div>
  );
};


export default PopularTours;
