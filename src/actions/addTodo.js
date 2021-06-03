export default function addTodo(todo) {
    return function (dispatch) {
        fetch('/api/v1/todos', {
            method: "POST",
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({todo: todo})
        }).then(r => r.json())
        .then(todo => dispatch({type: "ADD_SINGLE", todos: [todo]}))
    }
}
