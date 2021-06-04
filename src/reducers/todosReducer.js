const todosReducer = (state = { todos: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_TODOS':
      return {
        ...state,
        todos: [...state.todos],
        loading: true
      }
    case 'ADD_TODOS':
      return {
        ...state,
        todos: action.todos,
        loading: false
      }
    case 'ADD_SINGLE':
      return {
        ...state,
        todos: [...state.todos, ...action.todos],
        loading: false
      }
    case 'DELETE_SINGLE':
      return {        
        todos: state.todos.filter(todo => todo.id !== action.todos), 
        loading: false
      }
    case 'UPDATE_SINGLE':
      return {
        
      }
    default:
      return state;
  }
}

export default todosReducer;

//action.todos has the shit
//return [...todos, newTodo(action.payload.name)]
//const editedArray = state.todos.map{todo => todo.id === action.todos.id ? action.payload : list}