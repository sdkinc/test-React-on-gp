import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);
  function handlePlus(): void {
    setCounter(counter + 1);
  }
  function handlePlus10(): void {
    setCounter(counter + 10);
  }
  function handleMinus(): void {
    setCounter(counter - 1);
  }
  function handleMinus10(): void {
    setCounter(counter - 10);
  }

  return (
    <div className={styles.container}>
      <h2 style={{ backgroundColor: 'lightcoral' }}>Counter</h2>
      <button type="button" onClick={handleMinus10} className={`${styles.btn} ${styles.negative}`}>-10</button>
      <button type="button" onClick={handleMinus} className={`${styles.btn} ${styles.negative}`}>-</button>
      <span className={styles.label}>{counter}</span>
      <button type="button" onClick={handlePlus} className={`${styles.btn} ${styles.positive}`}>+</button>
      <button type="button" onClick={handlePlus10} className={`${styles.btn} ${styles.positive}`}>+10</button>
    </div>
  );
}

export default Counter;
