import React, { Component } from 'react'
import BolSelector from './BolSelector';
import Table from 'react-bootstrap/Table'
export class BolTable extends Component {
    render() {
        return (
            <Table responsive hover >
                <thead className='bg-light'>
                    <tr >
                        <th>Bill of Lading ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Select</th>
                    </tr>

                </thead>
                <tbody >
                    {this.props.bols.map(bol =>
                        <tr key={bol.id}>
                            <td >{bol.id}</td>
                            <td>{bol.customer.name}</td>
                            <td>{bol.date}</td>
                            <BolSelector bol={bol} handleSelect={this.props.handleSelect} />
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

export default BolTable
