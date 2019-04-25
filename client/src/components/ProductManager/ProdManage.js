import React, { Component } from 'react'
import ProdPanel from './ProdPanel'
import ProdSort from './ProdSort'
import './ProdManage.css';

export class ProdManage extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="prodManager">
        <h2 className="pt-5 pb-3 prodHeader">Manager Your Products Here:</h2>
        <ProdSort />
        {this.state.products.map(product =>
          <ProdPanel key={product.prod_id} name={product.name} description={product.description} qty={product.qty} />
        )}
      </div>
    )
  }
}

export default ProdManage
