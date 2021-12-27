import { createSlice } from "@reduxjs/toolkit";

export interface todoDataType {
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

// console.log(JSON.parse(localStorage.getItem('todoData') as string));
// const ccc = localStorage.getItem('todoData');
// JSON.parse(ccc as string);
// console.log(localStorage.getItem('todoData'))

const todoData: todoDataType | any = [
  { id: 1, value: "请输入", title: "请输入内容" },
];

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
      const data = todoData.map((item: any, index: number) => {
        if (item.id === payload.currentData.id) return payload.currentData;
        return item;
      });
      return { ...state, data };
    },
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default todo.reducer;