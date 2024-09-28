import { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button className="decrement-btn" onClick={decrement} disabled={count === 0}>
          -
        </button>
        <span className="count-value">{count}</span>
        <button className="increment-btn" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
