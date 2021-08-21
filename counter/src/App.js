
import './App.css';
import { useState, useEffect } from "react"

function App() {
  

  useEffect(() => {
    console.log("Re Render");
  })

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }
  const decrement = () => {
    setCount(prev => prev - 1);
  }
  const reset = () => {
    setCount(0);
  }


  return (
    <div id="counter">
      <h1 id="heading">Digital Counter App</h1>
      <div className="circle">
        <h2 id="screen">{count}</h2>
        <button id="plus" onClick={increment}>Add</button>
        <button id="minus" onClick={decrement}>Subtract</button>
        <button id="reset" onClick={reset}>Reset</button>

      </div>


    </div>
  );
}


export default App;
