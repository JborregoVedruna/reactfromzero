import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function FinalCounter() {
    const {count, setCount} = useContext(CounterContext)

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    
    return(
        <button onClick={increment}>Increment</button>
    )
}