import { useCounter } from "./hooks/useCounter"

export const CounterCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Cuonter with Custom Hook: {counter}</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ () => increment(2) }
      >+2</button>
      <button 
        className="btn btn-primary btn-sm"
        onClick={ reset }
      >Reset</button>
      <button 
        className="btn btn-primary"
        onClick={ () => decrement(3) }
      >-3</button>
    </>
  )
}
