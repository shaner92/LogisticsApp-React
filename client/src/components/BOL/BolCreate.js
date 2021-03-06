import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './BolCreate.css';
import BolSearch from './BolSearch';
import BolTable from './BolTable';

class BolCreate extends Component {
  constructor() {
    super();
    this.state = {
      bols: []
    };
  }

  componentDidMount() {
    fetch('/api/bols', {searchValue: this.state.searchValue})
    .then(res => res.json())
    .then(bols => this.setState({ bols }));
  }

  updateInput(event) {
    this.setState({ searchValue: event.target.value })
  }

  handleSearch(event) {
    fetch('/api/bols?SearchValue='+ this.state.searchValue)
    .then(res => res.json())
    .then(bols => this.setState({ bols }));
  }

  render() {
    return (
      <div>
        <h2 className="pt-5 pb-3">Please Select a Bill of Lading to Process:</h2>
        <BolSearch updateInput = {this.updateInput.bind(this)} handleSearch={this.handleSearch.bind(this)} bols={this.state.bols}/>
        <BolTable bols={this.state.bols} />
   
        <Link to="/Bill-of-Lading-Editor"> <Button variant="outline-dark" size="lg" className="launch-button">  Launch </Button>  </Link>
      </div>
    );
  }
}

export default BolCreate;
