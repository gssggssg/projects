import { createSlice } from "@reduxjs/toolkit";

export const snake = createSlice({
  name: "snake",
  initialState: { value: 0 },
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { updata } = snake.actions;

export default snake.reducer;