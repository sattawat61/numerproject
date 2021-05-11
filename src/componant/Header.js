//import logo from './logo.svg';
//import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HOME from '../page/home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Bisection from '../Root/Bisection'
import Falseposition from '../Root/False-position'
import Onepoint from '../Root/one-point'
import Newton from '../Root/Newton'
import Secant from '../Root/Secant'
function Headers() {
    return (
        <Router>
        <Navbar className="Navbar" expand="lg">
            <Navbar.Brand> <Link to="/Home">Home</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Root of Equation" id="basic-nav-dropdown">
                        <NavDropdown.Item> <Link to="/Bisection" id="in">Bisection</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/False-Position" id="in">False-Position</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/one-point" id="in">one-point</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Newton-Raphson" id="in">Newton-Raphson</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Secant" id="in">Secant</Link></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Linear Equation" id="basic-nav-dropdown">
                        <NavDropdown.Item> <Link to="/Cramer" id="in">Cramer</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Gauss Elimination" id="in">Gauss Elimination</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Gauss-Jordan" id="in">Gauss-Jordan</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/LU Decomposition" id="in">LU Decomposition</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Jacobi Iteration" id="in">Jacobi Iteration</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Gauss-Seidel Iteration" id="in">Gauss-Seidel Iteration</Link></NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/Cojugate Gradirnt" id="in">Cojugate Gradirnt</Link></NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Interpolation" id="basic-nav-dropdown">
                        <NavDropdown title="Newton divide" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link to="/Linear" id="in">Linear</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/quadratic" id="in">quadratic</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/polynomials" id="in">polynomials</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Lagrange polynomial" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link to="/Linear" id="in">Linear</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/quadratic" id="in">quadratic</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/polynomials" id="in">polynomials</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Spline interpolation" id="basic-nav-dropdown">
                            <NavDropdown.Item> <Link to="/Linear spline" id="in">linear spline</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/quadratic spline" id="in">quadratic Spline</Link></NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/cublic spline" id="in">cublic spline </Link></NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown> 
                    <NavDropdown title="Squares regression" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link to="/linear Regression" id="in">linear Regression</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/Polynomials Regression" id="in">Polynomials Regression</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to="/Mutiple regression" id="in">Mutiple regression</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Route path="/home" component={HOME} ></Route>
        <Route path="/Bisection" component={Bisection} ></Route>
        <Route path="/False-Position" component={Falseposition} ></Route>
        <Route path="/one-point" component={Onepoint} ></Route>
        <Route path="/Newton-Raphson" component={Newton} ></Route>
        <Route path="/Secant" component={Secant} ></Route>
        </Router>
    )
}

export default Headers;