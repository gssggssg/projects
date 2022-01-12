import { createSlice } from "@reduxjs/toolkit";

type Menu = { title: string, path: string };

export interface SliceState {
  menu: Menu[];
};

const initialState: SliceState = {
  menu: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Todo",
      path: "/todo",
    },
    {
      title: "贪吃蛇",
      path: "snake",
    },
    {
      title: "五子棋",
      path: "gobang",
    },
  ],
};

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default navigation.reducer;