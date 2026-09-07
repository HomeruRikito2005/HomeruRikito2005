import { useState } from 'react';

export default function ProductCard({ name, price }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px 0', maxWidth: '250px' }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
        <span>Quantity: {quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
    </div>
  );
}