import { useRef } from "react"

export const FocusScreen = () => {


	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef);
	

	const onClick = () => {
		const input = inputRef.current;
		if (input) {
			input.select();
		}		
	}

  return (
	<>
		<h1>Focus Screen</h1>
		<hr />
		<input 
			ref={ inputRef}
			type="text"
			placeholder="Ingrese su nombre"
			className="form-control"
		/>
		<button
			className="btn btn-primary mt-2"
			onClick={ onClick }
		>
			set focus
		</button>
	</>
  )
}