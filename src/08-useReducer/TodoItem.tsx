import { Todo } from "./todoReducer"

interface TodoItemProps {
	todo: Todo;
	onDeleteTodo: (id: number) => void;
	onToggleTodo: (id: number) => void;
  }
  
  export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: TodoItemProps) => {
  return (
	<li key={ todo.id } className="list-group-item d-flex justify-content-between">
		<span 
			className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : '' }`}
			onClick={ () => onToggleTodo(todo.id) }
		>
			{ todo.description }			
		</span>
		<button 
			onClick={ () => onDeleteTodo(todo.id) }
			className="btn btn-danger">Borrar</button>
	</li>	
  )
}