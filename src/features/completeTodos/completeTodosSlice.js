export const loadCompleteTodos = (data) => ({
    type: 'completeTodos/loadTodos', 
    payload: data.filter(todo => todo.complete === true)
})

export const addCompleteTodo = todo => ({
    type: 'completeTodos/addTodo',
    payload: todo
})

export const removeCompleteTodo = todo => ({
    type: 'completeTodos/removeTodo',
    payload: todo
})

const initialState = []
export const completeTodosSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'completeTodos/loadTodos': 
            return action.payload
        case 'completeTodos/addTodo': 
            return [...state, action.payload]
        case 'completeTodos/removeTodo':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'allTodos/removeTodo': 
            return state.filter(todo => todo.id !== action.payload.id)
        default: 
            return state
    }
}