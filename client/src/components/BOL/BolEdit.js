import React, { Component } from 'react'
import store from '../../store/index'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './BolEdit.css';
import ShipperInfo from './ShipperInfo'
import CustomerInfo from './CustomerInfo'
import CarrierInfo from './CarrierInfo'
import OrderInfo from './OrderInfo'

export class BolEdit extends Component {
  constructor() {
    super();
    this.state = {
      bol: {}
    };

  }

  componentDidMount() {
    this.setState({ bol: store.getState().selected_bol });

  }

  render() {
    let shipper, customer, carrier, order;
    if (this.state.bol.bol_id !== undefined) {
      shipper = <ShipperInfo shipper={this.state.bol.shipper} />
      customer = <CustomerInfo customer={this.state.bol.customer} />;
      carrier = <CarrierInfo carrier={this.state.bol.carrier} />;
      order = <OrderInfo order={this.state.bol.order} />;
    }
    return (
      <div>
        <h2 className="pt-5 pb-3 bolHeader">Bill of Lading ID: {this.state.bol.bol_id}</h2>
        <div className="bolEdit">
          {shipper}
          {customer}
          {carrier}
          {order}
        </div>
        <Link to=""> <Button variant="outline-dark" size="lg" className="launch-button">  Generate Report </Button>  </Link>
      </div>
    )
  }
}


export default BolEdit
