import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout/Layout';
import Counter from '../components/Counter/Counter';
import CityPage from '../components/CityPage/CityPage';
import Sandwich from '../components/Sandwich/Sandwich';
import CatPage from '../components/CatPage/CatPage';
import CatFact from '../components/CatFact/CatFact';
import FruitPage from '../components/FruitPage/FruitPage';
import DogCard from '../components/DogCard/DogCard';
import Shop from '../components/Shop/Shop';
import ProductPage from '../components/ProductPage/ProductPage';
import ExampleUseParams from '../components/ExampleUseParams/ExampleUseParams';
import Admin from '../components/Admin/Admin';
import UserPage from '../components/UserPage/UserPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="counter" element={<Counter />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="catpage" element={<CatPage />} />
        <Route path="catfact" element={<CatFact />} />
        <Route path="fruitpage" element={<FruitPage />} />
        <Route path="products" element={<Shop />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="users" element={<Admin />} />
        <Route path="users/:userId" element={<UserPage />} />
        <Route path="example/:catId/:toyId" element={<ExampleUseParams />} />
        <Route path="dogcard" element={<DogCard />} />
        <Route path="/" element={<CityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
