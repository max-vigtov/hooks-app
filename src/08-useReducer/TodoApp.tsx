import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";


export const TodoApp = () => {

	const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos()

	return (
		<>
			<h1>Todo App: { todosCount } <small>pendientes: { pendingTodosCount } </small></h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<ul className="list-group">
					<TodoList 
						todos={todos}
						onDeleteTodo={ handleDeleteTodo } 
						onToggleTodo={ handleToggleTodo } 
					/>
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={ handleNewTodo } />
				</div>
			</div>	
		</>
	)
}

