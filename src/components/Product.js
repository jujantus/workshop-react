import React, { Component } from "react";
import "../css/Product.css";

class Product extends Component {
  buy = () => {
    /*let stock = this.state.stock;

    if (stock > 0) {
      this.setState({ stock: stock - 1 });
    }*/
  };

  render() {
    return (
      <div className={this.props.selected ? "Product-selected" : "Product"}>
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
        <p>
          Stock:
          {this.props.data.stock !== 0 ? this.props.data.stock : "No hay stock"}
        </p>
        <button
          onClick={this.buy}
          disabled={this.props.stock !== 0 ? false : true}
        >
          Comprar
        </button>
      </div>
    );
  }
}

export default Product;
