// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/add-product" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
