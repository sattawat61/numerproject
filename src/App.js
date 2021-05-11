import logo from './logo.svg';
import './App.css';
import Headers from './componant/Header'
import Bisection from './Root/Bisection'
import Home from './page/home'
import Falseposition from './Root/False-position'
import Onepoint from './Root/one-point'
import Newton from './Root/Newton'
import Secant from './Root/Secant'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <Headers />
          </Route>
          <Route path='/Bisection'>
            <Bisection />
            </Route>
            <Route path='/False-Position'>
            <Falseposition />
            </Route>
            <Route path='/one-point'>
            <Onepoint />
            </Route>
            <Route path='/Newton-Raphson'>
            <Newton />
            </Route>
            <Route path='/Secant'>
            <Secant />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}
