import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './BolCreate.css';

class BolCreate extends Component {
  constructor() {
    super();
    this.state = {
      bols: [],
      searchValue: ''
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('/api/bols', {searchValue: this.state.searchValue})
    .then(res => res.json())
    .then(bols => this.setState({ bols }, () => console.log('Customers fetched...', bols)));
  }



  updateInput(event) {
    this.setState({ searchValue: event.target.value })
  }


  handleSearch() {
    fetch('/api/bols?SearchValue='+ this.state.searchValue)
    .then(res => res.json())
    .then(bols => this.setState({ bols }, () => console.log('Customers fetched...', bols)));
  }

  render() {
    return (
      <div>
        <h2 className="pt-5 pb-3">Please Select a Bill of Lading to Process:</h2>
        <Form inline className="pb-3 pr-5 float-right">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.updateInput} />
          <Button variant="outline-dark" onClick={this.handleSearch}>Search</Button>
        </Form>
        <Table responsive hover>
          <thead className='bg-light'>
            <tr >
              <th>Bill of Lading ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Select</th>
            </tr>

          </thead>
          <tbody>
            {this.state.bols.map(bol =>
              <tr key={bol.bol_id}>
                <td>{bol.bol_id}</td>
                <td>{bol.customer}</td>
                <td>{bol.date}</td>
                <td><input type="checkbox" name="name1" />&nbsp;</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button variant="outline-dark" size="lg" > Launch </Button>
      </div>
    );
  }
}

export default BolCreate;
