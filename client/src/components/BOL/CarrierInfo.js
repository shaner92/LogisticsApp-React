import React, { Component } from 'react'
import './CarrierInfo.css';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export class CarrierInfo extends Component {
  render() {
    return (
      <Card className="cardPanel">
        <Card.Body className="cardBody">
          <Card.Title>Carrier Info:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Please Fill the Below Fields in:</Card.Subtitle>
          <Form inline className="pb-3 pr-5">
            <Form.Group >
              <Form.Label>Trailer Number:</Form.Label>
              <FormControl type="text" className="mr-sm-2" onChange={this.props.updateInput} defaultValue={this.props.qty} />
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label>Seal Number:</Form.Label>
              <FormControl type="text" className="mr-sm-2" onChange={this.props.updateInput} defaultValue={this.props.qty} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

export default CarrierInfo
