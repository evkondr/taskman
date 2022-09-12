import { configureStore } from '@reduxjs/toolkit'
import userReucer from './usersSlice';

const store = configureStore({
  reducer: {
    usersList: userReucer 
  }
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;