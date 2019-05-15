import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropDownItem from './DropDownItem'

export class CarrierDropDown extends Component {
    render() {
        let carrierLabel = "Select Carrier:"
        return (
            <Dropdown >
                <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic"> {carrierLabel} </Dropdown.Toggle>
                <Dropdown.Menu >
                    {this.props.dataset.map(carrier =>
                        <React.Fragment key={carrier.carrier_id}>
                            <DropDownItem carrierName={carrier.name} handleSelect={this.props.handleSelect} />
                        </React.Fragment>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
export default CarrierDropDown
