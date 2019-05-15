import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export class DropDownItem extends Component {
    handleSelect(value){
        console.log(value);
    }
  render() {
    return (
        <Dropdown.Item onSelect={this.handleSelect.bind(this, this.props.carrierName)} >{this.props.carrierName}</Dropdown.Item>
    )
  }
}

export default DropDownItem
