import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const App = () => {
  const initialProducts = [
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Mouse', price: 19.99, inStock: true },
    { id: 3, name: 'Keyboard', price: 49.99, inStock: false },
    { id: 4, name: 'Monitor', price: 199.99, inStock: true },
    { id: 5, name: 'Speakers', price: 89.99, inStock: false }, // renamed from Headphones
    { id: 6, name: 'Phone', price: 699.99, inStock: false },
    { id: 7, name: 'Tablet', price: 399.99, inStock: true },   // added for test
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock === true;
    if (filter === 'outOfStock') return product.inStock === false;
    return true;
  });

  const handleRemove = (id) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Dashboard</h1>

      <ButtonGroup variant="contained" style={{ marginBottom: '20px' }}>
        <Button onClick={() => setFilter('all')} color={filter === 'all' ? 'primary' : 'secondary'}>
          All
        </Button>
        <Button onClick={() => setFilter('inStock')} color={filter === 'inStock' ? 'primary' : 'secondary'}>
          In Stock
        </Button>
        <Button onClick={() => setFilter('outOfStock')} color={filter === 'outOfStock' ? 'primary' : 'secondary'}>
          Out of Stock
        </Button>
      </ButtonGroup>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;