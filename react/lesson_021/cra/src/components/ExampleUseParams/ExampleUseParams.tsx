import React from 'react';
import { useParams } from 'react-router-dom';

export default function ExampleUseParams(): JSX.Element {
  const { catId, toyId } = useParams();
  return (
    <>
      <div>ExampleUseParams</div>
      <p>catId = {catId}</p>
      <p>toyId = {toyId}</p>
    </>
  );
}
