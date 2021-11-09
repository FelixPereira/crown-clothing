import './App.css';
import HomePage from './pages/homepage/homepage';
import Hats from './pages/Hats/Hats'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/hats'>Hats</Link>
          <Route exact path="/" component={ HomePage } />
          <Route path="/hats" component={ Hats } />
      </div>
    </Router>
  );
}

export default App;
