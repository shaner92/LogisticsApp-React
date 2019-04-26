import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class ShipperInfo extends Component {
  render() {
    return (
        <Card className="cardPanel">
        <Card.Body className="cardBody">
          <Card.Title>Ship From:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.shipper.name}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{this.props.shipper.city}, {this.props.shipper.province}, {this.props.shipper.country}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{this.props.shipper.address}, {this.props.shipper.post_code}</Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}

export default ShipperInfo
