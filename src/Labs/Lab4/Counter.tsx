import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter() {
  //   let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state" className="p-3">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)} id="wd-counter-up-click" className="btn btn-success mb-2 me-2">
        Up
      </button>

      <button onClick={() => setCount(count - 1)} id="wd-counter-down-click" className="btn btn-danger mb-2">
        Down
      </button>
      <hr />
    </div>
  );
}
