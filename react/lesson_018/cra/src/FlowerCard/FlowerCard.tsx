import React from 'react';

interface Flower {
  color: string;
  title: string;
  family: string;
  price: number;
}

interface Props {
  flower: Flower;
}
export default function FlowerCard(props: Props): JSX.Element {
  const { flower } = props;
  const {
    color, title, family, price
  } = flower;
  return (
    <div style={{ width: '500px', border: '1px solid', margin: '20px' }}>
      <p>A {title} is either a woody perennial flowering plant of the genus {title} (/ˈroʊzə/),
        in the family {family}
      </p>
      <p style={{ color }}>Color: {color}</p>
      <p>Price: {price}</p>
    </div>
  );
}
