import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Home from './Home';
import BolCreate from './BolCreate';
import PackSlip from './PackSlip';
import ProdManage from './ProdManage';

export class navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/home">Logistics</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <Nav.Link href="/BolCreate">Bill of Lading</Nav.Link>
                            <Nav.Link href="/PackSlip">Packing Slip</Nav.Link>
                            <Nav.Link href="/ProdManage">Product Management</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/BolCreate' component={BolCreate} />
                        <Route path='/PackSlip' component={PackSlip} />
                        <Route path='/ProdManage' component={ProdManage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default navbar
