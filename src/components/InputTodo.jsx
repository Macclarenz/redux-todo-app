import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import { addTodo } from "../features/allTodos/allTodosSlicer";
import { getTodo, postTodo } from "../utility/request";

export default function ({dispatch}) {
    const [latestId, setLatestId] = useState(0)

    const getLatestId = () => {
        fetch('/api/todos')
            .then(res => res.json())
            .then(jsonRes => setLatestId(jsonRes.todos.length))
            .catch(err => console.error(err))
    }

    useState(() => {
        getLatestId()
    }, [])

    const [value, setValue] = useState(null)

    const onChangeHandler = ({target}) => {
        setValue(target.value)
        return target.placeholder = 'Add Todo here...'
    }

    const postTodoHandler = (value) => {
        postTodo(value)
        dispatch(addTodo({text: value, complete: false, id: JSON.stringify(latestId + 1)}))
        setLatestId(prev => prev + 1)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const todoText = document.querySelector('#todoText')
        if (!todoText?.value) todoText.placeholder = 'Please type your to do here...'
        else {
            postTodoHandler(value)
            todoText.value = ''
            setValue(null)
        }
    }

    return (
        <div className="input-todo-container">
            <form className="input-todo-form" id="todoForm" onSubmit={onSubmitHandler}>
                <button type="submit" >< AiOutlinePlus /></button>
                <input 
                    autoComplete="off" 
                    type="text" 
                    name="text" 
                    id="todoText" 
                    placeholder = 'Add Todo here...' 
                    onChange={onChangeHandler}
                />
            </form>
        </div>
    )
}

 