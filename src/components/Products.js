import React, {useState} from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import AddProductForm from './AddProductForm';


const Products = () => {
  // Ejemplo de lista de productos (reemplazar con tus propios datos)
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      price: 5.99,
    },
  ];

  const [showForm, setShowForm] = useState(false);

  // ...lógica de la lista de productos...

  const handleAddProductClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4 text-white shadow-lg">
        Catálogo de Productos
      </h1>
      {showForm && <AddProductForm />}
      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleAddProductClick}>
        Agregar producto
      </button>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-5xl">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Products;

