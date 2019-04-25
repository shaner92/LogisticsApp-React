import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
import Home from './Home/Home';
import BolCreate from './BOL/BolCreate';
import BolEdit from './BOL/BolEdit';
import PackSlip from './PackingSlip/PackSlip';
import ProdManage from './ProductManager/ProdManage';

export class NavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/home">Logistics</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <Nav.Link href="/Bill-of-Lading-Creator">Bill of Lading</Nav.Link>
                            <Nav.Link href="/Packing-Slip-Creator">Packing Slip</Nav.Link>
                            <Nav.Link href="/Product-Manager">Product Management</Nav.Link>
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
