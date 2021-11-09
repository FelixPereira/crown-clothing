import './App.css';
import HomePage from './pages/homepage/homepage';
import Hats from './pages/Hats/Hats'
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Link to='/'>Home</Link>
        <Link to='/hats'>Hats</Link>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/hats" element={ <Hats /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
