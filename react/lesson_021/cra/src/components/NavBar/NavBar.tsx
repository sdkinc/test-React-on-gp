import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink to="counter" className={styles.link}>Counter </NavLink>
      <NavLink to="products" className={styles.link}>SHOP </NavLink>
      <NavLink to="users" className={styles.link}>Admin </NavLink>
      <NavLink to="sandwich" className={styles.link}>Sandwich </NavLink>
      <NavLink to="catpage" className={styles.link}>Cat Page </NavLink>
      <NavLink to="catfact" className={styles.link}>Cat Fact </NavLink>
      <NavLink to="fruitpage" className={styles.link}>Fruit Page </NavLink>
      <NavLink to="/" className={styles.link}>Home </NavLink>
    </nav>
  );
}
