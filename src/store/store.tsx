import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './newsSlice'
import userReducer from './userSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    newsReducer,
   userReducer
  },
})
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;