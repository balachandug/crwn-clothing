import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './components/homepage/homepage.component'
import ShopPage from './components/shop/shop.component';
import './App.css';


function App() {
  return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </div>
  );
}

export default App;
