import React, { Component } from "react";
import {connect} from 'react-redux';
import "../css/Product.css";
import Modal from 'react-modal'

class Product extends Component {
  constructor(){
    super()
      this.state = {
        showModal: false
      }
  }

  buy = () => {
    this.props.incrementCartCounter()
    this.props.decrementProductStock(this.props.data.id)
    this.forceUpdate()
  }

  view = () => {

  }

  render() {
    return (
      <div className= "card">
        <div className= "card-header">
          <h1>{this.props.data.title}</h1>
        </div>
      
      <div className = "card-body">
        <p>{this.props.data.description}</p>
        
          <p>Stock:
            {this.props.data.stock !== 0 ? this.props.data.stock : "No hay stock"}
          </p>
        
          <button 
            onClick={this.buy} 
            disabled={this.props.stock !== 0 ? false : true}
            className = "btn btn-primary">
              Comprar
          </button>
          
          <button 
            onClick={this.view}
            className = "btn btn-primary">
              Ver más
          </button>

      </div>    
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  incrementCartCounter: () => dispatch({type: "INCREMENT"}),
  decrementProductStock: (id) => dispatch({
    type: "DECREMENT_STOCK",
    id: id
  })
})

export default  connect (null, mapDispatchToProps)(Product);
