import React, { Component } from 'react'
import './CarrierInfo.css';
import DropDownMenu from './DropDownMenu'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


export class CarrierInfo extends Component {
  constructor() {
    super();
    this.state = {
      carriers: []
    };
  }
  handleSelect(carrierID) {
    console.log(carrierID)
  }

  componentDidMount() {
    fetch('/api/carriers')
      .then(res => res.json())
      .then(carriers => this.setState({ carriers }));

      
  }
  render() {
    return (
      <Card className="cardPanel">
        <Card.Body className="cardBody">
          <Card.Title>Carrier Info:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Please Fill the Below Fields in:</Card.Subtitle>
          <Form inline className="pb-3 pr-5">
            <Form.Group >
            {/* <Form.Label>Select Carrier:</Form.Label>
              <FormControl type="text" className="mr-sm-2" /> */}
              <DropDownMenu dataset={this.state.carriers}/>
            </Form.Group>
              <Form.Group >
                <Form.Label>Trailer Number:</Form.Label>
                <FormControl type="text" className="mr-sm-2" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Seal Number:</Form.Label>
                <FormControl type="text" className="mr-sm-2" />
              </Form.Group>
          </Form>
        </Card.Body>
      </Card>
        )
      }
    }
    
    export default CarrierInfo
