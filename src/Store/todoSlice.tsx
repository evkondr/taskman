import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";
import { fetchTodosByUserId, deleteTodo } from "./asyncActions";
import { isError } from "../utils";

interface IState{
    todos: ITodo[];
    isLoading: boolean
    error: any
}

const initialState:IState = {
    todos:[],
    isLoading: false,
    error: null
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( item => item.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodosByUserId.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodosByUserId.fulfilled, (state, action:PayloadAction<ITodo[]>) => {
            state.todos = action.payload
            state.isLoading = false
        });
        builder.addCase(deleteTodo.fulfilled, (state, action:PayloadAction<any>) => {
            
        })
        builder.addMatcher(isError, (state, action:PayloadAction<string>)=>{
            state.error = action.payload
            state.isLoading = false
        })
    }
})
export const {removeTodo} = todoSlice.actions;
export default todoSlice.reducer;