import { createSlice } from "@reduxjs/toolkit";

export interface todoDataType {
  [x: string]: any;
  [index: number]: {
    id: number,
    value: string;
    title: string;
  },
};
export interface todoType {
  data: todoDataType,
  currentData: todoDataType,
  isEdit: boolean,
};

const todoData: todoDataType =
  JSON.parse(localStorage.getItem('todoData') as string) ||
  [{ id: 1, value: "请输入", title: "请输入内容" }];

const states: todoType = {
  data: todoData,
  currentData: todoData[0],
  isEdit: true,
};

export const todo = createSlice({
  name: "todo",
  initialState: states,
  reducers: {
    adddata: (state, { payload }) => {
      return { ...state, currentData: payload };
    },
    saveData: (state, { payload }) => {
      const data = todoData.map((item: todoDataType[0]): todoDataType => {
        if (item.id === payload.currentData.id) return payload.currentData;
        return item;
      });
      localStorage.setItem('todoData', JSON.stringify(data));
      return { ...state, data };
    },
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default todo.reducer;