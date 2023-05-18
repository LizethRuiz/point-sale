import React from 'react';

import { FiPackage, FiDollarSign, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';



const CatalogTitle = () => {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center mt-8 mb-4 text-white shadow-lg">
          Easy CRM
        </h1>
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <Link to="/products">
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                    <FiPackage size={24} />
                </button>
            </Link>
            <li>
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                <FiDollarSign size={24} />
              </button>
            </li>
            <li>
              <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                <FiUsers size={24} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

export default CatalogTitle;