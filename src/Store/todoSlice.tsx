import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";
import { fetchTodosByUserId } from "./asyncActions";


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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodosByUserId.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodosByUserId.fulfilled, (state, action:PayloadAction<ITodo[]>) => {
            state.todos = action.payload
            state.isLoading = false
        });
        builder.addCase(fetchTodosByUserId.rejected, (state, action) => {
            state.error = action.payload
        });
    }
})
export default todoSlice.reducer