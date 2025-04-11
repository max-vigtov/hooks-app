import { useForm } from "../hooks"
import { Todo } from "./todoReducer";

export const TodoAdd = ({ onNewTodo }: { onNewTodo: (todo: Todo) => void }) => {

	const { description, onInputChange, onResetForm } = useForm({
		description: ''
	});

	const onFormSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
		event.preventDefault();
		if ( description.lenght <= 1 ) return;
		
		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description			
		}

		onNewTodo( newTodo );
		onResetForm();
	}
  return (
	<form onSubmit={ onFormSubmit }>
		<input 
			type="text" 
			placeholder="¿Qué hay que hacer?"
			className="form-control"
			name="description"
			value={ description }
			onChange={ onInputChange }
		/>
		<button
			type="submit"
			className="btn btn-outline-primary mt-1"
		>
			Agregar
		</button>
	</form>
  )
}