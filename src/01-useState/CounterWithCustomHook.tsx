import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

	const { counter, increment, decrement, reset } = useCounter();

  return (
	<>
		<h1>Counter: {counter} </h1>
		<hr />

		<button onClick={ () => increment(1) } className="btn btn-secondary">+1</button>
		<button onClick={ () => decrement(2) } className="btn btn-secondary">-1</button>
		<button onClick={ reset } className="btn btn-danger">Reset</button>
	
	</>
  )
}