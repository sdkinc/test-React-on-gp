import React, { useState } from 'react';
import styles from './Sandwich.module.css';

function Sandwich(): JSX.Element {
  const [state, setState] = useState('Бутерброд: ');
  function addBrot(): void {
    setState(`${state}хлеб`);
  }
  function addCheese(): void {
    setState(`${state} сыр `);
  }
  function addSausage(): void {
    setState(`${state}колбаса `);
  }
  return (
    <div className={styles.container}>
      <button type="button" onClick={addBrot} className={styles.btn}>добавить хлеб</button>
      <button type="button" onClick={addCheese} className={styles.btn}>добавить сыр</button>
      <button type="button" onClick={addSausage} className={styles.btn}>добавить колбасу</button>
      <p> </p>
      {state}
    </div>
  );
}

export default Sandwich;
