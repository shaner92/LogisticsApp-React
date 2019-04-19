import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

export class BolSearch extends Component {
    constructor() {
        super();
        this.state = {
          searchValue: ''
        };
      }
 
  render() {
    return (
        <Form inline className="pb-3 pr-5 float-right">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.updateInput} />
          <Button variant="outline-dark" onClick={this.props.handleSearch}>Search</Button>
        </Form>
    )
  }
}

export default BolSearch
