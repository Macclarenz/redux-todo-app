import React from "react"

export default function (props) {
    const {
        icons,
        text,
        methods,
        complete
    } = props

    const {
        addComplete, 
        removeComplete,
        removeTodo
    } = methods

    const {
        check,
        close
    } = icons

    return (
        <>
            <button type='button'onClick={complete ? removeComplete : addComplete}>{complete ? close : check}</button>
            <p>{text}</p>
            <button type="button" onClick={removeTodo}>{close}</button>
        </>  
    )
}

/*

<li>
    <button onClick = { METHOD }><ICON /></button>
    <p>{ TEXT }</p>
</li>

*/