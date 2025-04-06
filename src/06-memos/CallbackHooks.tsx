import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {

	const [counter, setCounter] = useState( 0 )

	// const incrementFather = () => {
	// 	setCounter(counter + 1);
	// }

	const incrementFather = useCallback(
	  ( value: number ) => {
		setCounter( ( c ) => c + value )
	  },
	  [],
	);

	useEffect(() => {
	  // incrementFather();	  
	}, []);
	
  return (
	<>
		<h1>useCallback Hook: { counter }</h1>
		<hr />

		<ShowIncrement increment={ incrementFather }/>
	</>
  )
}