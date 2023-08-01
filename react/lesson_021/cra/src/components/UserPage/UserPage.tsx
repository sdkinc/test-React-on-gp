import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../Admin/types/User';

export default function UserPage(): JSX.Element {
  const initialValue: User = {
    id: 0,
    email: '',
    username: '',
    password: '',
    name: {
      firstname: '',
      lastname: ''
    },
    address: {
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation: {
        lat: '',
        long: ''
      }
    },
    phone: ''
  };
  const { userId } = useParams();
  const [user, setUser] = useState<User>(initialValue);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await res.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);
  return (
    <div>
      USer
      <span>Username: {user.username}</span>
      <span>First name: {user.name.firstname}</span>
      <span>Last name: {user.name.lastname}</span>
      <span>Email: {user.email}</span>
      <span>City: {user.address.city}</span>
      <Link to="../users">back to list</Link>
    </div>
  );
}
