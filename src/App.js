
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{ display: "flex", alignItem: "center", justifyContent: "center" }}>
        <span >Count  :{count}</span>

        <button onClick={() => {
          setCount((prev) => prev + 1)
        }}>+</button><button onClick={() => {
          setCount((prev) => {
            if (prev === 0) {
              return prev
            }
            return prev - 1
          })
        }}>-</button>
      </div>

    </div>
  );
}

export default App;
