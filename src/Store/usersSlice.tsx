import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from "./index";
import { IUser } from '../interfaces';
import userService from '../services/userService';
import { fetchUsers } from './asyncActions';

interface IState {
    users:IUser[],
    isLoading: boolean,
    error: any,
}
const initialState:IState = {
    users: [],
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
        })
        builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.payload
        })
    }
  })
  export default usersSlice.reducer