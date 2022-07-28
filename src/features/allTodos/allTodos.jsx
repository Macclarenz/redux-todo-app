import React, { useEffect } from 'react'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import Todo from '../../components/Todo'
import { deleteTodo, getTodo, patchTodo } from '../../utility/request'
import { addCompleteTodo, loadCompleteTodos } from '../completeTodos/completeTodosSlice'
import { loadTodos, removeTodo } from './allTodosSlicer'

export default function AllTodo({dispatch, todos}) {
    const onFirstLoad = async () => getTodo(dispatch, [loadTodos, loadCompleteTodos])

    useEffect(() => {
        onFirstLoad()
    }, [])

    const addCompleteHandler = todo => {
        patchTodo(todo.id, true)
        dispatch(addCompleteTodo(todo))
    }

    const removeTodoHandler = todo => {
        deleteTodo(todo.id)
        dispatch(removeTodo(todo))
    }

    return (
        <div className="incomplete-todo-container">
            <h2>Incomplete todo</h2>
            <ul className="incomplete-todo-list">
                {
                    todos?.length && todos.map(todo => (
                    <li key={`incomplete-todo-${todo.id}`} className = 'incomplete-todo-item'> 
                        <Todo 
                            icons = {{
                                check: <AiOutlineCheck />,
                                close: <AiOutlineClose />
                            }}
                            text = {todo.text}
                            methods = {{
                                addComplete: () => addCompleteHandler(todo),
                                removeTodo: () => removeTodoHandler(todo)
                            }}
                        />
                    </li>))
                }
            </ul>
        </div>
    )
}