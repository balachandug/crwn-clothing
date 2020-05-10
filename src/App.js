import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/homepage/homepage.component'
import ShopPage from './components/shop/shop.component';
import './App.css';

import Header from './components/header/header.component'


function App() {
  return (
      <div>
          <Header/>
          <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/shop' component={ShopPage}/>
          </Switch>
      </div>
  );
}

export default App;
