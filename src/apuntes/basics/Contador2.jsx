import { useState } from 'react'

export default function Contador2({initialValue = 0}) {
    const [count, setCount] = useState(initialValue);
        
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        </div>
    );
}