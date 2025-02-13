// src/pages/Cart.jsx
import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

    // Ejemplo de uso de addToCart
    const handleAddToCart = () => {
        const newProduct = { id: 1, name: 'Producto 1', price: '$10' };
        addToCart(newProduct);
      };

      return (
        <div>
          <h1>Carrito</h1>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - {item.price}</li>
            ))}
          </ul>
          <button onClick={handleAddToCart}>Agregar producto al carrito</button>
        </div>
      );
    }