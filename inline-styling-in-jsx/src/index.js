import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "2px solid black"
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Deepak Verma is a good boy!</h1>,
  document.getElementById("root")
);
