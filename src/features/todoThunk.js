import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  await delay(2000);
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await res.json();
  return data;
});

