import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from './types/User';
import styles from './Admin.module.css';

export default function Admin(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  async function loadUSers(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/users');
    const array = await res.json();
    setUsers(array);
  }
  useEffect(() => {
    loadUSers();
  }, []);
  return (
    <div>
      <ul className={styles.userList}>
        {users
          .map((user) => (
            <li key={user.id} className={styles.userCard}>
              <span>Username: {user.username}</span>
              <span>First name: {user.name.firstname}</span>
              <span>Last name: {user.name.lastname}</span>
            <Link to={String(user.id)} className={styles.link}> more info</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
