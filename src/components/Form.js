import React, { Component } from 'react'

export class Form extends Component {

    createTodo = (e) => {
        if (e.key === 'Enter' && e.target.value != ""){
            console.log(e.target.value)
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

export default Form
