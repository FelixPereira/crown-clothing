import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page';

import { auth } from './firebase/firebase';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path='/shop' component={ ShopPage } />
            <Route exact path='/signin' component={ SignInAndSignUpPage } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
