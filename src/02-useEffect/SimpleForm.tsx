import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

	const [formState, setFormState] = useState({
		username: 'strider',
		email: 'mvt.2000@hotmail.com'
	});

	const { username, email } = formState;

	const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value
		});	
	}

	useEffect(() => {
	//   console.log('useEffect called!');
	}, [])
	
	useEffect(() => {
		// console.log('formState changed!');
	}, [ formState ])

	useEffect(() => {
		// console.log('email changed!');
	}, [ email])

  return (
	<>
		<h1>Simple Form</h1>
		<hr />

		<input 
			type="text" 
			className="form-control" 
			placeholder="Username" 
			name="username"
			value={ username }
			onChange={ onInputChange }
		/>
		<input 
			type="text" 
			className="form-control mt-2" 
			placeholder="Email" 
			name="email"
			value={ email } 
			onChange={ onInputChange }
		/>
		
		{ 
			( username === 'strider2' ) && <Message /> 
		}
	</>
  )
}