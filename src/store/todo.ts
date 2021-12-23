import { createSlice } from "@reduxjs/toolkit";

export interface todoType {
  value: string,
};

const state: todoType = {
  value: "你好",
};

export const todo = createSlice({
  name: "todo",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      console.log(payload);
      return { ...state, ...payload };
    },
  },
});

export default todo.reducer;