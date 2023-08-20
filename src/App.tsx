import { useState } from "react";
import Todo from "./Components/Todo";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count + 2}
        </button>
        <Todo />
      </div>
    </>
  );
}

export default App;
