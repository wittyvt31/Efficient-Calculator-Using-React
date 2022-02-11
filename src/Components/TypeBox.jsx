import React, { Component } from "react";
import "../App.css";
import Operand from "./Operand";
import Operator from "./Operator";

function TypeBox({ Operands, Operators, onOperand, onOperator }) {
  return (
    <div className="typeBox">
      {Operands.map((item) => (
        <Operand
          onOperand={onOperand}
          onOperator={onOperator}
          Operand={item}
          key={item.value}
        />
      ))}
      {Operators.map((item) => (
        <Operator onOperator={onOperator} Operator={item} key={item.id} />
      ))}
    </div>
  );
}

export default TypeBox;
