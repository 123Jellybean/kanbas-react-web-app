import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-2">
        Add Element
      </button>
      <ul className="list-unstyled">
        {array.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
            <button
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              className="btn btn-danger ms-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
