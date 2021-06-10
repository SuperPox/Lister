import React, { Component } from 'react'
import {connect} from 'react-redux'
import addTodo from '../actions/addTodo'

export class Form extends Component { 
    
    createTodo = (e) => {
        if (e.key === 'Enter' && e.target.value !== ""){
            console.log('form input = ', e.target.value)
            const title = e.target.value
            const todo = {id: 777, title: title, done: false}
            console.log("send to: addTodoAction")
            this.props.addTodo(todo)    
            e.target.value = ''                  
        }
    }

    render() {
        return (
            <div>
                <div className="inputContainer">
                    <input 
                    className="taskInput" 
                    type="text" 
                    placeholder="Add a task" 
                    maxLength="50"
                    onKeyPress={this.createTodo} 
                    />
                </div> 
            </div>
        )
    }
}

export default (connect(null, {addTodo: addTodo})(Form))

