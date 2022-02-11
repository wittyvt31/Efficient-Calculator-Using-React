import React, { Component } from "react";
import "../App.css";

class Operator extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={() => this.props.onOperator(this.props.Operator)}
        className="button"
      >
        {this.props.Operator.value}
      </button>
    );
  }
}

export default Operator;
