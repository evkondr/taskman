import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./index";
import { IUser } from '../interfaces';
import userService from '../services/userService';
import { fetchUsers, fetchUserById } from './asyncActions';

interface IState {
    users:IUser[],
    currentUser:IUser | null,
    isLoading: boolean,
    error: any,
}
const initialState:IState = {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.isLoading = false
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload
        });
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUserById.fulfilled, (state, action:PayloadAction<IUser>) => {
            state.currentUser = action.payload
            state.isLoading = false
        });
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.error = action.payload
        });
    }
  })
  export default usersSlice.reducer