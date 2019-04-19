import React, { Component } from 'react'
import ProdPanel from './ProdPanel'

export class ProdManage extends Component {
  constructor(){
    super();
    this.state = {
      products:[]
    };
  }
  render() {
    return (
      <div>
        <ProdPanel />
      </div>
    )
  }
}

export default ProdManage
