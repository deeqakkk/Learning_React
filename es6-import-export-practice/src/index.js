import React from "react";
import ReactDOM from "react-dom";
import { add, subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>Addition Gives: {add(1, 2)}</li>
    <li>Multiplication gives: {multiply(2, 3)}</li>
    <li>Difference gives: {subtract(7, 2)}</li>
    <li>Divison gives: {divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
