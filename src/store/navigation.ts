import { createSlice } from "@reduxjs/toolkit";

type Menu = { title: string, path: string };

export interface NavigationTypes {
  menu: Menu[];
};

const initialState: NavigationTypes = {
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
    {
      title: "项目列表",
      path: "FSProjectList",
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