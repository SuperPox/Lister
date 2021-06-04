export default function deleteTodo(todo, justID) {
    return function (dispatch) {
        fetch(`/api/v1/todos/${todo}`, {
            method: "DELETE",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
        })
        .then(todo => dispatch({type: "DELETE_SINGLE", todos: justID}))
    }
}

//action is undefined