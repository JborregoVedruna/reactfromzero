import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function CounterNumber() {
    const {count, setCount} = useContext(CounterContext)
    return(
        <p>{count}</p>
    )
}