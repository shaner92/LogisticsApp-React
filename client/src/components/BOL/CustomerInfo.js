import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class CustomerInfo extends Component {
  render() {
    return (
      <Card className="cardPanel">
        <Card.Body className="cardBody">
          <Card.Title>Ship To:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.customer.name}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{this.props.customer.city}, {this.props.customer.province}, {this.props.customer.country}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{this.props.customer.address}, {this.props.customer.post_code}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}

export default CustomerInfo
