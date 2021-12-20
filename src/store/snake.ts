import { createSlice } from "@reduxjs/toolkit";

interface snakeType {
  score: number,
  level: number,
};

const state: snakeType = {
  score: 0,
  level: 1,
};

export const snake = createSlice({
  name: "snake",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { updata } = snake.actions;

export default snake.reducer;