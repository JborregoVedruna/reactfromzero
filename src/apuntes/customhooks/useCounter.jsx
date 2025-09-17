import { useState } from 'react'

export default function useCounter(iV=0) {
    const [count, setCount] = useState(iV);
    
    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const reset = () => {
        setCount(iV)
    }

    return {count, decrement, increment, reset}
}