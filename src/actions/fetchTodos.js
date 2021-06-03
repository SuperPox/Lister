export const fetchTodos = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TODOS'})
      fetch('/api/v1/todos')
      .then(response => {return response.json()})
      .then(responseJSON => {    
        dispatch({ type: 'ADD_TODOS', todos: responseJSON })
      })
      
    }
  }