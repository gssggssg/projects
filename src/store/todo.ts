import { createSlice } from "@reduxjs/toolkit";

export interface todoType {

};

const state: todoType = {

};

export const todo = createSlice({
  name: "todo",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default todo.reducer;