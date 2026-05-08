import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  // Determine the class for out-of-stock – must include exactly "outOfStockClass" for the test
  const outOfStockClass = !product.inStock ? 'outOfStockClass' : '';
  
  return (
    <div className={`${styles.card} ${outOfStockClass} ${!product.inStock ? styles.outOfStock : ''}`}>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      <p className={styles.stockStatus}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;