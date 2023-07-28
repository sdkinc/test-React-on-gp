import React, { useEffect, useState } from 'react';
import styles from './CatFact.module.css';

export default function CatFact(): JSX.Element {
  const [fact, setFact] = useState('');
  const [factLength, setFactLength] = useState(0);

  function refreshFact(): void {
    fetch('https://catfact.ninja/fact')
      .then((res: Response) => res.json())
      .then((obj: { fact: string, length: number }) => {
        const { fact: catFact, length } = obj;
        setFact(catFact);
        setFactLength(length);
      });
  }
  useEffect(() => {
    refreshFact();
  }, []);
  return (
    <div className={styles.container}>
      <button type="button" onClick={refreshFact} className={styles.btn}>Refresh fact 🐈</button>
      <p className={styles.text}>{fact}</p>
      <p className={styles.text}>length this fact is: {factLength}</p>
    </div>
  );
}
