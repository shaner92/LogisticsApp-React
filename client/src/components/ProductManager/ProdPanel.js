import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
export class ProdPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="float-right" responsive style={{ maxWidth: '24rem' }} >
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.description}</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Form inline className="pb-3 pr-5 float-right">
                    <Form.Group>
                        <Form.Label>Quantity:</Form.Label>
                        <FormControl type="text" placeholder={this.props.qty} className="mr-sm-2" onChange={this.props.updateInput} />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Unit:</Form.Label>
                        <Form.Control as="select" multiple>
                            <option>Case</option>
                            <option>Piece</option>
                        </Form.Control>
                    </Form.Group> */}
                    <Form.Group>
                        <Button variant="outline-info">Save Changes</Button>
                        {/* <Form.Row></Form.Row> */}
                        <Button variant="outline-danger">Delete Product</Button>
                        </Form.Group>
                    </Form>
                
                </Card.Body>


            </Card>
        )
    }
}

export default ProdPanel
