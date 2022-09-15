import { configureStore } from "@reduxjs/toolkit";
import userReucer from "./usersSlice";
import authReducer from "./authSlice";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    usersList: userReucer,
    isAuth: authReducer,
    todosList: todoReducer
  }
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;