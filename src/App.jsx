// src/App.jsx:
//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Products from './pages/Products';
import Cart from './pages/Cart';
//import ProductCard from './pages/ProductCard';


export default function App() {
  return (
      <Background>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Background>
  );
}

