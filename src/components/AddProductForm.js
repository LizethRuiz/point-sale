import React, { useState } from 'react';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar alguna acción con los datos ingresados, como enviarlos al servidor o guardarlos en el estado de la aplicación

    // Luego puedes limpiar los campos del formulario
    setProductName('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4 text-white shadow-lg">
        Agregar Producto
      </h1>
      <form className="mx-auto max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-white font-bold mb-2">
            Nombre del producto:
          </label>
          <input
            type="text"
            id="productName"
            className="border-2 border-gray-200 p-2 rounded w-full"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-bold mb-2">
            Descripción:
          </label>
          <textarea
            id="description"
            className="border-2 border-gray-200 p-2 rounded w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-white font-bold mb-2">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            className="border-2 border-gray-200 p-2 rounded w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;