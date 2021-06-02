import React from 'react'
import { ACTIONS } from './Reducer.js'

export default function Todo({todo, dispatch}) {
    return (
        <div>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>
                ✓
            </button>

            <span> </span>
            <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
            <span> </span>

            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>
                ✖
            </button>
        </div>
    )
}
