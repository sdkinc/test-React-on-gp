import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import FruitPage from './FruitPage/FruitPage';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/Counter';
import Sandwich from './Sandwich/Sandwich';
import Car from './Car/Car';
import Fruit from './Fruit/Fruit';
import Parent from './Parent/Parent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Parent />
    <Fruit title="apple" color="green" weight={1000} img="https://t4.ftcdn.net/jpg/00/48/47/91/360_F_48479111_WLr33FVH1wF4s5s7783LrCFoXjgbvxoI.jpg" />
    <Fruit title="banana" color="yellow" weight={520} img="https://content2.rozetka.com.ua/goods/images/big/295811989.png" />
    <Fruit title="apple" color="red" weight={2000} img="https://www.investlab.com.ua/wp-content/uploads/2019/08/YAbloko.jpg" />
    <Car color="green" brand="bmw" />
    <Car color="red" brand="porsche" />
    <Counter />
    <App />
    <FruitPage />
    <CityPage />
    <Sandwich />
  </React.StrictMode>
);
