import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './types/Product';
import styles from './Shop.module.css';

export default function Shop(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  async function loadProducts(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/products');
    const array = await res.json();
    setProducts(array);
  }
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <ul className={styles.productList}>
      {products
        .map((product) =>
        (
          <li key={product.id} className={styles.productCard}>
            <span className={styles.productTitle}>{product.title}</span>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={`product ${product.id}`} className={styles.image} />
            </div>
            <span className={styles.price}>{product.price}</span>
            <Link to={String(product.id)} className={styles.link}> to item</Link>
          </li>
        )
        )}
    </ul>
  );
}
