import React, { Component } from "react";
import "./../App.css";
import ProductList from "./ProductList";
import Navbar from "./Navbar"
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  componentWillMount(){
    fetch('http://localhost:3001/products')
    .then(response => response.json())
    .then(response => {this.props.fillProducts(response)})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className = "row">
          <div className = "col">
            <Navbar/>
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  total: state.total
});

let mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  fillProducts: (products) => dispatch({type: "FETCH_PRODUCTS", products})
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
