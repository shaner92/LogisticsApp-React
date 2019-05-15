import React, { Component } from 'react'
import PieChart from '../Charts/PieChart'

export class Home extends Component {
  constructor(){
    super();
    this.state = {
      data : { pass: 156, fail: 11, other: 23},
      width : "500px",
      height : "500px"
    };
  }
  render() {
    return (
      <div>
        <PieChart data={this.state.data} />
      </div>
    )
  }
}

export default Home
