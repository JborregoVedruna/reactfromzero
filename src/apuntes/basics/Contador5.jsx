import { useState } from 'react'

export default function Contador5(props) {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
        <p>{props.children}: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </div>
  );
}