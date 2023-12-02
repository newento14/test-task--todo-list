import {createSlice} from "@reduxjs/toolkit";
import {ITodos} from "../../types/todos.ts";


type IInitialState = {
  todos: ITodos[],
  isFetching: boolean,
}

const initialState: IInitialState = {
  todos: [],
  isFetching: true,
}


export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
      localStorage.setItem("todos", JSON.stringify(state.todos))
      state.isFetching = false
    },
    addTodo: (state, action) => {
      state.todos.unshift(action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    }
  }
})

export const {setTodos, addTodo, removeTodo, updateTodo} = todosSlice.actions
export default todosSlice.reducer