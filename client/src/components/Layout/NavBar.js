import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from '../Home/Home';
import BolCreate from '../BOL/BolCreate';
import BolEdit from '../BOL/BolEdit';
import PackSlip from '../PackingSlip/PackSlip';
import ProdManage from '../ProductManager/ProdManage';

export class NavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Logistics</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/Bill-of-Lading-Creator" className="nav-link">Bill of Lading</Link>
                            <Link to="/Packing-Slip-Creator" className="nav-link">Packing Slip</Link>
                            <Link to="/Product-Manager" className="nav-link">Product Management</Link>
                        </Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form> */}
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/Bill-of-Lading-Creator' component={BolCreate} />
                        <Route path='/Bill-of-Lading-Editor' component={BolEdit} />
                        <Route path='/Packing-Slip-Creator' component={PackSlip} />
                        <Route path='/Product-Manager' component={ProdManage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default NavBar
