export default function updateTodo(todo, justID, checkChange) {
    return function (dispatch) {
        fetch(`/api/v1/todos/${todo.id}`, {
            method: "PATCH",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({done: checkChange})
        })
        .then(todo => dispatch({type: "UPDATE_SINGLE", todos: justID}))
    }
}

//this.props.updateTodo(todo, justID, checkChange)
//dispatch({ type: 'ADD_TODOS', todos: responseJSON })
//.then(todo => dispatch({type: "UPDATE_SINGLE", todos: justID}))