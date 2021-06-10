import React from 'react';
import {connect} from 'react-redux'
import deleteTodo from '../actions/deleteTodo'
import updateTodo from '../actions/updateTodo'


class TodoList extends React.Component {

  handleDelete = (todo) => {
    console.log('handling delete on ID: ', todo.id, '/ sending to action')
    const justID = todo.id
    this.props.deleteTodo(todo.id, justID)  
  }

  handleCheck = (e, todo) => {
    console.log('handling update on ID: ', todo.id, '/ sending to action')
    console.log('check = ', !e.target.checked)
    const justID = todo.id
    const checkChange = !todo.done
    this.props.updateTodo(todo, justID, checkChange)       
  }
  
  render() {
    console.log("TodoList", this.props.todos)
    return (
    <div className="listWrapper">
        <ul className="taskList">           
            {this.props.todos.map((todo) => {
                return(
                <li className="task" todo={todo} key={todo.id}>
                    <input className="taskCheckbox" type="checkbox" 
                      checked={todo.done}
                      onChange={(e) => this.handleCheck(e, todo)}
                    />              
                    <label className="taskLabel">{todo.title}</label>
                    <span className="deleteTaskBtn"
                      onClick= {(e) => this.handleDelete(todo)}>x</span>
                </li>
                )       
            })} 	    
        </ul>
    </div>
    )
  }
}

export default (connect(null, {deleteTodo: deleteTodo, updateTodo: updateTodo })(TodoList))

