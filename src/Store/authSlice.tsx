import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from "./index";

interface IAuthState{
    isAuth: boolean
}

const initialState:IAuthState ={
    isAuth: false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state) => {
            state.isAuth = true
        },
        logout:(state) => {
            state.isAuth = false
        }
    },
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer