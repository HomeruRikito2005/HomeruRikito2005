import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Wireless Headphones', price: 99 },
        { id: 2, name: 'Gaming Mouse', price: 49 },
        { id: 3, name: 'Mechanical Keyboard', price: 120 }
      ]);
      setStatus('success');
    }, 2000);
  }, []); 

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Product Store</h1>
      
      {status === 'loading' && <p>Loading products from server...</p>}

      {status === 'success' && products.map(product => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}