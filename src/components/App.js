import React, { Component } from "react";
import "./../App.css";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.total}</p>
        <button onClick={this.props.increment} />
        <ProductList />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  total: state.total
});

let mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
