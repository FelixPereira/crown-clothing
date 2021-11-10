import './App.css';
import HomePage from './pages/homepage/homepage';
import Shop from './pages/Shop/shopPage'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Route exact path="/" component={ HomePage } />
        <Route path="/shop" component={ Shop } />
      </div>
    </Router>
  );
}

export default App;
