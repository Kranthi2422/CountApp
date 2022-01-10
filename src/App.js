import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header>
        <h1>
          Counter app using State
        </h1>
      </header>
      <h2> Current Count is {count}</h2>

      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => count > 9 ? " " : setCount(count+1)}>Increase</button>
      <button onClick ={()=> count === 0 ? "" : setCount(count-1)}>Decrease</button>
    </div>
  );
}

export default App;
