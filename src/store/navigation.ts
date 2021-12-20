import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  menu: {
    [index: number]: {
      title: string;
      path: string;
    },
  }
}

const initialState: SliceState = {
  menu: [
    {
      title: "Home",
      path: "/",
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
    updata: (state, {payload}) => {
      return { ...state, ...payload };
    },
  },
});

export const { updata } = navigation.actions;

export default navigation.reducer;