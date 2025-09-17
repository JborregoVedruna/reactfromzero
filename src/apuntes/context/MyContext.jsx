import CounterNumber from "./CounterNumber"
import FinalCounter from "./FinalCounter"

import { CounterProvider } from "./CounterContext"


export default function MyContext() {
    return(
        <CounterProvider>
            <CounterNumber></CounterNumber>
            <FinalCounter></FinalCounter>
        </CounterProvider>
    )
}
