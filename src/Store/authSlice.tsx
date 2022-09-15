import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
interface IAuthState{
    isAuth: boolean,
    userID: string | undefined
}

const initialState:IAuthState ={
    isAuth: false,
    userID: undefined
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state, action:PayloadAction<string>) => {
            state.isAuth = true
            state.userID = action.payload
        },
        logout:(state) => {
            state.isAuth = false
            state.userID = undefined
        }
    },
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer