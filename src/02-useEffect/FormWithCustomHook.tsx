import { useEffect,  } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

	const { formState, onInputChange, onResetForm } = useForm({
		username: '',
		email: '',
		password: ''
	});

	const { username, email, password } = formState;

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
		<h1>Form With Custom Hook</h1>
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
		
		<input 
			type="text" 
			className="form-control" 
			placeholder="Password" 
			name="password"
			value={ password }
			onChange={ onInputChange }
		/>
		<button className="btn btn-primary mt-2" onClick={ onResetForm }>Reset</button>
	</>
  )
}