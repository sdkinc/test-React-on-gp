import React from 'react';
import styles from './Fruits.module.css';

interface Props {
  title: string;
  color: string;
  weight: number;
  img: string;
}

export default function Fruit(props: Props): JSX.Element {
  const {
 title, color, weight, img
} = props;
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <h2>Fruit card</h2>
      <p>Title: {title} </p>
      <p>Color: {color} </p>
      <p>Weight: {weight} </p>
      <img src={img} alt="" className={styles.img} />
    </div>
  );
}
