import React, { Component } from 'react'
import store from '../../store/index'

export class BolEdit extends Component {

  componentDidMount(){
    console.log(store.getState().selected_bol);
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default BolEdit
