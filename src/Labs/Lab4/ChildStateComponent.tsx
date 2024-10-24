import "bootstrap/dist/css/bootstrap.min.css";
export default function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div id="wd-child-state">
          <h3>Counter {counter}</h3>
          <button onClick={() => setCounter(counter + 1)} id="wd-increment-child-state-click" className="btn btn-success mb-2 me-2">
            Increment</button>
          <button onClick={() => setCounter(counter - 1)} id="wd-decrement-child-state-click" className="btn btn-danger mb-2">
            Decrement</button>
          <hr/>
        </div>
    );}
    
    