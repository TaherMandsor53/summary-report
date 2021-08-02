import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
