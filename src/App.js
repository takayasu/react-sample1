import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
