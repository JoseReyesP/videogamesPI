import { createSlice } from "@reduxjs/toolkit";

export const videogameListSlice = createSlice({
  name: "videogameList",
  initialState: {
    todoList: [
      {
        id: 0,
        title: "test element",
        description: "este es un elemento de prueba",
      },
    ],
  },
  reducers: {},
});

export const { addTodo, removeTodo } = todoListSlice.actions;

export default videogameList.reducer;
