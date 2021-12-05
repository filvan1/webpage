import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*
        <Route path="/about" exact component={Home} />
        ^ Gör så att den renderas endast när URL är ordagrannt path
*/

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/about" component={Home} />
        
        <Route path="/game" component={Game} />
        </Switch>
      </div>
    </Router>

    

  );
}

export default App;