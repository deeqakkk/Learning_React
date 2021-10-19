import React, { useState } from "react";

function App() {
  const [headingText, UpdateheadingText] = useState("");
  const [colorName, setColorName] = useState(true);
  var name = "";

  function handleClick() {
    UpdateheadingText(name);
  }
  function handleChange(event) {
    UpdateheadingText(event.target.value);
    name = event.target.value;
  }

  function hoverOver() {
    setColorName(false);
  }
  function hoverOut() {
    setColorName(true);
  }

  return (
    <div className="container">
      <h1>Welcome {headingText}</h1>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
          value={headingText}
        />
        <button
          style={{ backgroundColor: colorName ? "white" : "black" }}
          onClick={handleClick}
          onMouseOver={hoverOver}
          onMouseOut={hoverOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
