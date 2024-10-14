// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config'; // Import the API base URL
import { motion } from 'framer-motion';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <motion.div 
          key={product._id} 
          className="border rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
