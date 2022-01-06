import { createSlice } from "@reduxjs/toolkit";

export interface homeType {
};

const state: homeType = {
};

export const home = createSlice({
  name: "home",
  initialState: state,
  reducers: {
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default home.reducer;