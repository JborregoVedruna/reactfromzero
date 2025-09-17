import { useState } from 'react'

export default function Contador3() {
  const [count, setCount] = useState(0);
  const color = count%2 === 0 ? 'green' : 'red';

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p style={{color}}>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}