import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from '../interfaces';
import { fetchUsers, fetchUserById } from './asyncActions';
import { isError } from '../utils';
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
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUserById.fulfilled, (state, action:PayloadAction<IUser>) => {
            state.currentUser = action.payload
            state.isLoading = false
        });
        builder.addMatcher(isError, (state, action:PayloadAction<string>)=>{
            state.error = action.payload
        })
    }
  })
  export default usersSlice.reducer