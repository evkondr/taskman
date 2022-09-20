import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ITodo, IUser } from "../interfaces";
import todosService from "../services/todosSetvice";
import userService from "../services/userService";
//USERS ACTIONS
export const fetchUsers = createAsyncThunk<IUser[]>("users/fetch", async(_, {rejectWithValue}) => {
    try {
        const response = await userService.getAll()
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log(error)
            return rejectWithValue(error.message);
        }else{
            return rejectWithValue(error)
        }
    }
})
export const fetchUserById = createAsyncThunk<IUser, string>("user/fetchById", async(id, {rejectWithValue}) => {
    try {
        const response = await userService.getUserById(id);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log(error)
            return rejectWithValue(error.message);
        }else{
            return rejectWithValue(error)
        }
    }
})

//TODOS ACTIONS
export const fetchTodosByUserId = createAsyncThunk<ITodo[], string>("todos/fetchTodosByUserId", async(id, {rejectWithValue}) => {
    try {
        const response = await todosService.getTodosByUserId(id);
        return response.data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log(error)
            return rejectWithValue(error.message);
        }else{
            return rejectWithValue(error)
        }
    }
})