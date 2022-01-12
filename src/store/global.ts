/**
 * 全局变量
 */
import { createSlice } from "@reduxjs/toolkit";

export interface GlobalTypes {
  theme: string,
};

const state: GlobalTypes = {
  theme: "dark",
};

export const global = createSlice({
  name: "global",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default global.reducer;