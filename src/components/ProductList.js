import React, { Component } from "react";
import { connect } from "react-redux";

import Product from "./Product";

class ProductList extends Component {
  /*selectAll = () => {
    this.setState({ selectAll: !this.state.selectAll });
  };*/

  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Product key={product.id} data={product} selected={false} />
        ))}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductList);
