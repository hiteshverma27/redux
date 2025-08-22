import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import anotherCounterReducer from "./features/anotherCounterSlice";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    anotherCounter: anotherCounterReducer,
    todo:todoReducer
  },
});
