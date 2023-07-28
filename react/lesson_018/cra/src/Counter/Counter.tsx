import React, { useEffect, useState } from 'react';
import styles from './Counter.module.css';

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(30);
  function handleAge(): void {
    setAge(age + 1);
  }
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

  // Случай 1 -  пустой массив зависимостей
  useEffect(() => {
    console.log('useEffect 1 - только при первом рендере');
  }, []);

  // Случай 2 - не указали зависимостей
  useEffect(() => {
    console.log('useEffect 2 - при первом и каждом другом рендере - при любых изменениях');
  });

  // Случай 3 - указали зависимость - counter
  useEffect(() => {
    console.log('useEffect 3 - при первом рендере и при каждом изменении переменной counter');
  }, [counter]);

  return (
    <div className={styles.container}>
      <h2 style={{ backgroundColor: 'lightcoral' }}>Counter</h2>
      <button type="button" onClick={handleMinus10} className={`${styles.btn} ${styles.negative}`}>-10</button>
      <button type="button" onClick={handleMinus} className={`${styles.btn} ${styles.negative}`}>-</button>
      <span className={styles.label}>{counter}</span>
      <button type="button" onClick={handlePlus} className={`${styles.btn} ${styles.positive}`}>+</button>
      <button type="button" onClick={handlePlus10} className={`${styles.btn} ${styles.positive}`}>+10</button>
      <span>Возраст: {age}</span>
      <button type="button" onClick={handleAge} className={styles.btn}>Взослеть</button>
    </div>
  );
}

export default Counter;
