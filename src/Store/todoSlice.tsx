import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../interfaces";
import { fetchTodosByUserId, deleteTodoAsync, toggleCompletedAsync} from "./asyncActions";
import { isError } from "../utils";

interface IState{
    todos: ITodo[];
    isLoading: boolean;
    error: any;
    page: number;
    pages: number;
}

const initialState:IState = {
    todos:[],
    isLoading: false,
    error: null,
    page: 0,
    pages: 0
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        //removes current todo
        removeTodo: (state, action) => {
            state.todos = state.todos.filter( item => item.id !== action.payload)
        },
        //changes completed status
        toggleCompleted: (state, action:PayloadAction<number>) => {
            state.todos = state.todos.map( item => {
                if(item.id == action.payload){
                    item.completed = !item.completed
                    return item
                }
                return item
            })
        },
        //sets total pages
        setPages: (state, action:PayloadAction<number>) => {
            state.pages = action.payload
        },
        //switches pages
        togglePage: (state, action:PayloadAction<string>) => {
            if(action.payload === "next"){
                if(state.page >= state.pages - 1){
                    state.page = 0
                }else{
                    state.page += 1
                }
            }else{
                if(state.page === 0){
                    state.page = state.pages - 1
                }else{
                    state.page -= 1
                }
            }
        }
    },
    extraReducers: (builder) => {
        //Fetching todos by user id
        builder.addCase(fetchTodosByUserId.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodosByUserId.fulfilled, (state, action:PayloadAction<ITodo[]>) => {
            state.todos = action.payload
            state.isLoading = false
        });
        //Deleting todo
        builder.addCase(deleteTodoAsync.fulfilled, (state, action:PayloadAction<any>) => {
            
        })
        builder.addCase(toggleCompletedAsync.fulfilled, (state, action:PayloadAction<any>) => {
            
        })
        //Error handling
        builder.addMatcher(isError, (state, action:PayloadAction<string>)=>{
            state.error = action.payload
            state.isLoading = false
        })
    }
})
export const {removeTodo, setPages, togglePage, toggleCompleted} = todoSlice.actions;
export default todoSlice.reducer;