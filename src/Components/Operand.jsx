import React, { Component } from "react";
import "../App.css";

class Operand extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onOperand(this.props.Operand)}
        className="button"
      >
        {this.props.Operand.value}
      </button>
    );
  }
}

export default Operand;
