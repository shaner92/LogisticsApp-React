import React, { Component } from 'react'
import store from '../../store/index'

export class BolEdit extends Component {
  constructor() {
    super();
    this.state = {
      bols: []
    };
  }
  
  componentDidMount(){
      fetch('/api/bols', {searchValue: this.state.searchValue})
      .then(res => res.json())
      .then(bols => this.setState({ bols }));
  }
  render() {
    return (
      <div>
        <h2 className="pt-5 pb-3">Please Edit your Bill(s) of Lading:</h2>
      </div>
    )
  }
}

export default BolEdit
