import React, { Component } from 'react'
import store from '../../store/index'
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
  
  componentDidMount(){
    fetch('/api/bol?SearchValue='+ store.getState().selected_bol)
    .then(res => res.json())
    .then(bol => {
      this.setState({ bol: bol });
  });
  }
  render() {
    return (
      <div>
        <h2 className="pt-5 pb-3">Bill of Lading ID: {this.state.bol.bol_id}</h2>
        <CustomerInfo />
        <CarrierInfo />
        <OrderInfo />
      </div>
    )
  }
}

export default BolEdit
