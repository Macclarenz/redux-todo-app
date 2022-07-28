import '../style/style.scss'
import React, { useEffect } from "react"
import { getTodo } from '../utility/request'
import { loadTodos } from '../features/allTodos/allTodosSlicer'
import AllTodo from '../features/allTodos/allTodos'
import CompleteTodos from '../features/completeTodos/completeTodos'
import InputTodo from '../components/InputTodo'

export default function ({ dispatch, state }) {
    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    const { allTodos, completeTodos } = state

    return (
        <div className="todo-container">
            <InputTodo 
                dispatch={dispatch}
            /> 
            <CompleteTodos
                dispatch={dispatch}
                todos={completeTodos}
            />
             <AllTodo
                dispatch={dispatch}
                todos={allTodos}
            />
        </div>
    )
}

function filterTodo(arr, isComplete) {
    return arr.filter(el => el.complete === isComplete)
}