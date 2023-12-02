import {createSlice} from "@reduxjs/toolkit";
import {ITodos} from "../../types/todos.ts";


type IInitialState = {
  todos: ITodos[]
}

const initialState: IInitialState = {
  todos: []
}


export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload.payload
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.payload)
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => todo.id === action.payload.payload.id ? action.payload.payload : todo)
    }
  }
})

export const {setTodos, addTodo, removeTodo, updateTodo} = todosSlice.actions
export default todosSlice.reducer