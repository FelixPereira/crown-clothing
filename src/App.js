import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
