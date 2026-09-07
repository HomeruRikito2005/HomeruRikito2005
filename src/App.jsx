import ProductCard from './ProductCard';

export default function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99 },
    { id: 2, name: 'Gaming Mouse', price: 49 },
    { id: 3, name: 'Mechanical Keyboard', price: 120 }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Product Store</h1>

      {products.map(product => (
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}