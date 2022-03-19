import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createDocument, addCollectionAndDocuments } from './firebase/firebase';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/userSelectors';
import { selectCollectionsPreview } from './redux/shop/shopSelector';

import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/Shop/shopPage';
import SignInAndSignUpPage from './pages/signIn-signUp-page/signIn-signUp-page';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import CollectionPageContainer from './pages/collectionpage/collectionPage';


const App = ({setCurrentUser, collectionsArray }) => {
  let unsubscribeFromAuth = null;
  
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
    })
      //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    }
    return () => {
      unsubscribeFromAuth = null;
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
            <Route path='/shop/:categoryUrl' component={CollectionPageContainer} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={ 
            () => this.props.currentUser ? 
            <Redirect to='/' /> 
            : <SignInAndSignUpPage />  
          } />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
