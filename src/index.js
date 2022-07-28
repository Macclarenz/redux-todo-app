import React from 'react'
import { createRoot } from 'react-dom/client'
import server from '../server'
import { store } from './app/store'
import App from './app/App'
server()

const root = createRoot(document.querySelector('.outer-container'))

const render = () => {
    root.render(
        <App 
            state = {store.getState()}
            dispatch = {store.dispatch}
        />
    )
}
store.subscribe(render)
render()

function printMessage() {
    console.log(store.getState())
}

// // post
// postTest()
// getTest()

// // update
// patchTest()
// getTest()

// // delete
// deleteTest()
// getTest()