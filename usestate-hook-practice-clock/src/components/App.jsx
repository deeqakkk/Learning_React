import React, { useState } from "react";

function App() {
  // let time = new Date().toLocaleTimeString();

  var [state, setState] = useState("00:00:00");
  function getTime() {
    setState((state = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h2>{state}</h2>
      <button onClick={setInterval(getTime, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
