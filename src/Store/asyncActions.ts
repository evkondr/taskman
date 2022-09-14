import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";
import userService from "../services/userService";
export const fetchUsers = createAsyncThunk<IUser[]>("users/fetch", async(_, {rejectWithValue}) => {
    try {
        const response = await userService.getAll()
        return response.data;
    } catch (error:any) {
        return rejectWithValue(error.message)
    }
})
export const fetchUserById = createAsyncThunk<IUser, string>("user/fetchById", async(id, {rejectWithValue}) => {
    try {
        const response = await userService.getUserById(id);
        return response.data;
    } catch (error:any) {
        return rejectWithValue(error.message)
    }
})