import React, { Component } from 'react'
import store from '../../store/index'
import { Link } from 'react-router-dom'
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
    let header, shipper, customer, carrier, order, report;
    //Build up page structer once data has been loaded
    if (this.state.bol.bol_id !== undefined) {
      header = <h2 className="pt-5 pb-3 bolHeader">Bill of Lading ID: {this.state.bol.bol_id}</h2>
      shipper = <ShipperInfo shipper={this.state.bol.shipper} />
      customer = <CustomerInfo customer={this.state.bol.customer} />;
      carrier = <CarrierInfo carrier={this.state.bol.carrier} />;
      order = <OrderInfo order={this.state.bol.order} />;
      report = <Link to=""> <Button variant="outline-dark" size="lg" className="launch-button">  Generate Report </Button>  </Link>;
    } else {
      //If not data has been loaded display error.
      header = <h2 className="pt-5 pb-3 bolHeader">Sorry, please return to Bill of Lading creation screen.</h2>
    }
    return (
      <React.Fragment>
        {header}
        <div className="bolEdit">
          {shipper}
          {customer}
          {carrier}
          {order}
        </div>
        {report}
      </React.Fragment>
    )
  }
}


export default BolEdit
