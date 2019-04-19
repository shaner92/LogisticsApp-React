import React, { Component } from 'react'
import ProdInfo from './ProdInfo'
import ProdEdit from './ProdEdit'
export class ProdPanel extends Component {
  render() {
    return (
      <div>
        <ProdInfo />
        <ProdEdit />
      </div>
    )
  }
}

export default ProdPanel
