import React, { useEffect, useReducer, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createDocument, addCollectionAndDocuments } from './firebase/firebase';
import { setCurrentUser } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/userSelectors';
import { selectCollectionsPreview } from './redux/shop/shopSelector';

import './App.css';

import Header from './components/header/Header';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/Shop/shopPage'));
const SignInAndSignUpPage = lazy(() => import('./pages/signIn-signUp-page/signIn-signUp-page'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage/checkoutPage'));
const CollectionPageContainer = lazy(() => import('./pages/collectionpage/collectionPage'));



const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const collectionsArray = useSelector(selectCollectionsPreview);
  const setCurrentUser = useDispatch();
  
  let unsubscribeFromAuth = null;
  
  /*
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
      }
      //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    }
    /* return () => {
      unsubscribeFromAuth = null;
    }; 
  }, []); 
  */

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Suspense fallback="...Loading">
            <Route exact path="/" component={ HomePage } />
            <Route exact path='/shop' component={ ShopPage } />
              <Route path='/shop/:categoryUrl' component={CollectionPageContainer} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={ 
              () => currentUser ? 
              <Redirect to='/' /> 
              : <SignInAndSignUpPage />  
            } />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default App;
