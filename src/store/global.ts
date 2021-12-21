/**
 * 全局变量
 */
import { createSlice } from "@reduxjs/toolkit";

export interface globalType {
  theme: string,
};

const state: globalType = {
  theme: "black",
};

export const global = createSlice({
  name: "home",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default global.reducer;