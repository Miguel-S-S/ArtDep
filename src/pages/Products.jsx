// src/pages/Products.jsx
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Producto 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Producto 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Producto 3', price: '$30', image: 'https://via.placeholder.com/150' },
];

export default function Products() {
  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}