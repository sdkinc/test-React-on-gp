import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from './types/User';

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
      USers:
      <ul>
        {users
          .map((user) => (
            <li key={user.id}>{user.name.firstname} {user.name.lastname}
            <Link to={String(user.id)}> to item</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
