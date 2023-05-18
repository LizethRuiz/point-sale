import React from 'react';

const ProductCard = ({ name, description, price }) => {

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-4 max-w-xs">
      <h3 className="text-white text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-300">{description}</p>
      <p className="text-white font-semibold mt-2">${price.toFixed(2)}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;