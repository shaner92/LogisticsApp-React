import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './BolCreate.css';

class BolCreate extends Component {
  constructor() {
    super();
    this.state = {
      bols: []
    };
  }

  componentDidMount() {
    fetch('/api/bols')
      .then(res => res.json())
      .then(bols => this.setState({ bols }, () => console.log('Customers fetched...', bols)));
  }

  render() {
    return (
      <div>
        <h2 className="p-5">Please Select a Bill of Lading to Process:</h2>
        <Table responsive hover>
          <thead className ='bg-light'>
            <tr >
              <th>Bill of Lading ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Select</th>
            </tr>

          </thead>
          <tbody>
            {this.state.bols.map(bol=>
                <tr>
                  <td key={bol.bol_id}>{bol.bol_id}</td>
                  <td key={bol.bol_id}>{bol.customer}</td>
                  <td key={bol.bol_id}>{bol.date}</td>                  
                  <td key={bol.bol_id}><input type="checkbox" name="name1" />&nbsp;</td>                  
                </tr>
              )}
          </tbody>
        </Table>
        <Button variant="dark" size="lg"> Launch </Button>
      </div>
    );
  }
}

export default BolCreate;
