import  stepInfo  from './app';
import { configureStore } from "@reduxjs/toolkit";
import  infoSlice  from "./info/slice";
import  planSlice  from './plan/slice';
import  addOnsSlice  from './addons/slice';

export const store = configureStore({
  reducer: {
    info: infoSlice,
    plan: planSlice,
    addOns: addOnsSlice,
    step: stepInfo
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch