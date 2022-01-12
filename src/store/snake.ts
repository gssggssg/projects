import { createSlice } from "@reduxjs/toolkit";

export interface SnakeTypes {
  score: number,
  level: number,
};

const state: SnakeTypes = {
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

export default snake.reducer;