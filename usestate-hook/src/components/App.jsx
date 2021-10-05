import React, { useState } from "react";

// useState returns an two items 1st an array of elements and 2nd one is a function
function App() {
  const [count,setCount] = useState(12);

// const rgb=[104, 109, 224]

function add(){
 setCount(count+1);
}

function subtract(){
  setCount(count-1);
}

  return    <div className="container">
    {/* here we are telling h1 to keep an eye on the useState and
    update itself accordingly without interfaring others */}
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>;

}

export default App;
