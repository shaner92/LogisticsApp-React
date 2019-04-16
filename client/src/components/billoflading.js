import React, { Component } from 'react';
import './billoflading.css';

class BillofLading extends Component {
  constructor() {
    super();
    this.state = {
      bills: []
    };
  }

  componentDidMount() {
    fetch('/api/bills')
      .then(res => res.json())
      .then(bills => this.setState({bills}, () => console.log('Customers fetched...', bills)));
  }

  render() {
    return (
      <div>
        <h2>Make Your Choice:</h2>
        {this.state.options.map(bill => 
          <div className = "row justify-content-center p-2">
          <button type="button" className="btn btn-primary" key={bill.id}>{bill.choice}</button>
          </div>
          
        )}
      </div>
    );
  }
}

export default BillofLading;
