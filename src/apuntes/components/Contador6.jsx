import useCounter from '../customhooks/useCounter'

export default function Contador6({iV=0}) {
  const {count, decrement, increment, reset} = useCounter(iV);

  return (
    <div>
        <p>Counts: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}