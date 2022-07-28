import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { allTodosReducer } from "../features/allTodos/allTodosSlicer";
import { completeTodosSlice } from "../features/completeTodos/completeTodosSlice";

const reducers = {
    allTodos: allTodosReducer,
    completeTodos: completeTodosSlice
}

const rootReducer = combineReducers(reducers)
export const store = configureStore({reducer: rootReducer})