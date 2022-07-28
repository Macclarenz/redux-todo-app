export function getTodo(dispatch, action) {
    (async () => {
        try {
            const response = await fetch('/api/todos')
            if (response.ok) {
                const jsonResponse = await response.json()

                if (!dispatch || !action) {
                    return console.log(jsonResponse.todos)
                } else {
                    const [allTodos, completeTodos] = action
                    dispatch(allTodos(jsonResponse.todos))
                    dispatch(completeTodos(jsonResponse.todos))
                }
            }
        } catch(err) {
            console.error(`Failed to connect: ${err}`)
        }
    })()    
}

export function postTodo(text) {
    (async () => {
        try {
            await fetch('/api/todos', {
                method: 'POST',
                body: JSON.stringify({text, complete: false})
            })
        } catch (err) {
            console.log(`Failed to post: ${err}`)
        }
    })()
}

export function patchTodo(id, setComplete) {
    (async () => {
        try {
            await fetch(`/api/todos/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({complete: setComplete})
            })
        } catch (err) {
            console.log(`Failed to update: ${err}`)
        }
    })()
}

export function deleteTodo(id) {
    (async () => {
        try {
            await fetch(`/api/todos/${id}`, {
                method: 'DELETE'
            })
        } catch (err) {
            console.log(`Failed to delete: ${err}`)
        }
    })()
}