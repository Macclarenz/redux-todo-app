import React from "react";
import Todo from "../../components/Todo";
import { AiOutlineClose } from 'react-icons/ai'
import { patchTodo, deleteTodo } from "../../utility/request";
import { removeCompleteTodo } from "./completeTodosSlice";
import { removeTodo } from "../allTodos/allTodosSlicer";

export default function CompleteTodos ({dispatch, todos}) {
    const removeCompleteHandler = (todo) => {
        patchTodo(todo.id, false)
        dispatch(removeCompleteTodo(todo))
    }

    const removeTodoHandler = (todo) => {
        deleteTodo(todo.id)
        dispatch(removeTodo(todo))
    }

    return (
        <div className="complete-todo-container">
            <h2>Complete todo</h2>
            <ul className="complete-todo-list">
                {
                    todos?.length && todos.map(todo => (
                    <li key={`complete-todo-${todo.id}`} className = 'complete-todo-item'> 
                        <Todo 
                            icons = {{
                                close: <AiOutlineClose />
                            }}
                            text = {todo.text}
                            methods = {{
                                removeComplete: () => removeCompleteHandler(todo),
                                removeTodo: () => removeTodoHandler(todo)
                            }}
                            complete = {true}
                        />
                    </li>))
                }
            </ul>
        </div>
    )
}