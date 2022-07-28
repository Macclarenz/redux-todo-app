export const loadTodos = data => ({
    type: 'allTodos/loadTodos',
    payload: data.filter(todo => todo.complete === false)
})

export const addTodo = (data) => ({
    type: 'allTodos/addTodo',
    payload: data
})

export const removeTodo = data => ({
    type: 'allTodos/removeTodo',
    payload: data
})

const initialState = []
export const allTodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'allTodos/loadTodos': 
            return action.payload
        case 'allTodos/addTodo': 
            return [...state, action.payload]    
        case 'allTodos/removeTodo':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'completeTodos/addTodo':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'completeTodos/removeTodo': 
            return [...state, action.payload]
        default: 
            return state
    }
} 