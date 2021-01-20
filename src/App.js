
import CurrentStockholm from "./CurrentStockholm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
  <Router>
    <Navigation/>
    <Switch>
      <Route path="/contact"><Contact/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/projects"><Projects/></Route>
      <Route path="/"><Home/></Route>
    </Switch>

  </Router>
  );
}



export default App;
