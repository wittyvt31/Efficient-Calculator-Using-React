import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TypeBox from "./Components/TypeBox";
import Screen from "./Components/Screen";

class Calculator extends Component {
  state = {
    Operands: [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 0 },
    ],
    Operators: [
      { id: 1, value: "+" },
      { id: 2, value: "-" },
      { id: 3, value: "*" },
      { id: 4, value: "/" },
      { id: 7, value: "Clr" },
      { id: 5, value: "AC" },
      { id: 6, value: "=" },
    ],
    string: "",
  };

  handleOperand = (item) =>
    this.setState({ string: this.state.string + item.value });

  handleOperator = (item) => {
    if (item.id == 6) {
      this.setState({ string: eval(this.state.string) });
    } else if (item.id == 5) {
      this.setState({ string: "" });
    } else if (item.id == 7) {
      this.setState({ string: this.state.string.slice(0, -1) });
    } else this.setState({ string: this.state.string + item.value });
  };

  render() {
    return (
      <div className="box">
        <hr style={{ width: "50%", position: "relative", top: "10px" }} />
        <Screen onScreen={this.state.string} />
        <TypeBox
          Operands={this.state.Operands}
          Operators={this.state.Operators}
          onOperator={this.handleOperator}
          onOperand={this.handleOperand}
        />
      </div>
    );
  }
}

export default Calculator;
