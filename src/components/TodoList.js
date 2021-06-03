import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
    <div className="listWrapper">
        <ul className="taskList">
            {this.props.todos.map((todo) => {
                return(
                <li className="task" todo={todo} key={todo.id}>
                    <input className="taskCheckbox" type="checkbox" />              
                    <label className="taskLabel">{todo.title}</label>
                    <span className="deleteTaskBtn">x</span>
                </li>
                )       
            })} 	    
        </ul>
    </div>
    )
  }
}

export default TodoList;
