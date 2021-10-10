import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState("false");

  function hoverOver() {
    setMouseOver(true);
  }
  function hoverOut(){
    setMouseOver(false);
  }
  function handleClick() {
    setHeadingText("Sumbitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={hoverOver} onClick={handleClick}
      onMouseOut={hoverOut}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}>
        Submit
      </button>
    </div>
  );
}

export default App;
