import React, { useEffect, useState } from 'react';
import styles from './DogCard.module.css';

export default function DogCard(): JSX.Element {
  const [url, setUrl] = useState('');

  function fetchImage(): void {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res: Response) => res.json())
      .then((obj: { message: string }) => {
        const { message } = obj;
        // console.log(message);
        setUrl(message);
      });
  }
  useEffect(() => {
    // функция сработает при Mounting - когда компонент впервые отрисовался
    fetchImage();
  }, []);

  function refreshImage(): void {
    fetchImage();
  }

  return (
    <div className={styles.container}>
      <h1>Random dog Foto</h1>
      <button type="button" onClick={refreshImage}>Refresh image</button>
      <div>
        <img className={styles.image} src={url} alt="" />
      </div>
    </div>
  );
}
