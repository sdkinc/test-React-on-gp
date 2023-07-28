import React from 'react';
import FlowerCard from '../FlowerCard/FlowerCard';

export default function Parent(): JSX.Element {
  const flower = {
    color: 'red', title: 'rose', family: 'Rosaceae', price: 100
  };
  return (
    <div>
      <FlowerCard flower={flower} />
    </div>
  );
}
