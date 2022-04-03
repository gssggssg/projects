import { createSlice } from "@reduxjs/toolkit";
import { logInApi } from "../api/logIn";

export interface LogInDataType {
};


const states: LogInDataType = {
};

export const logIn = createSlice({
  name: "logIn",
  initialState: states,
  reducers: {
    // 新增
    addData: (state, { payload }) => {
      console.log("payload", payload);
      logInApi(payload);
    },
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default logIn.reducer;