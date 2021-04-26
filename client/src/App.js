import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Guilds from "./pages/Guilds";
import Home from "./pages/Home";
import Raids from "./pages/Raids";
import Rules from "./pages/Rules";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guilds">Gilden</Link>
            </li>
            <li>
              <Link to="/raids">Raids</Link>
            </li>
            <li>
              <Link to="/rules">Regeln</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/raids">
            <Raids />
          </Route>
          <Route path="/guilds">
            <Guilds />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
