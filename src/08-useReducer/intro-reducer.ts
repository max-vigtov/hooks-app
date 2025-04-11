interface Action {
	type: string;
	payload?: any;
}

const initialState = [{
	id: 1,
	todo: 'Recolectar la priedra del alma',
	done: false
}];

const todoReducer = (state = initialState, action?: Action) => {

	if ( action?.type === '[ADD] add todo' ) {
		return [ ...state, action.payload ];
	}

	return state;
}

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Recolectar la priedra del poder',
	done: false
};

const addTodoAction = {
	type: '[ADD] add todo',
	payload: newTodo
}

todos = todoReducer( todos, addTodoAction );

console.log(todos);
