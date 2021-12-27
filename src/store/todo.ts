import { createSlice } from "@reduxjs/toolkit";

export interface todoDataType {
  filter: any;
  map: any;
  [index: number]: {
    id: number,
    value: string;
    title: string;
  },
};
export interface todoType {
  data: todoDataType,
  isEdit: boolean,
};

// console.log(JSON.parse(localStorage.getItem('todoData') as string));
// const ccc = localStorage.getItem('todoData');
// JSON.parse(ccc as string);
// console.log(localStorage.getItem('todoData'))

const todoData: todoDataType | any = [
  { id: 1, value: "请输入", title: "请输入内容" },
];

const state: todoType = {
  data: todoData,
  isEdit: true,
};

export const todo = createSlice({
  name: "todo",
  initialState: state,
  reducers: {
    adddata: (state, { payload }) => {
      const data: any = [
        {
          value: payload.value,
          title: payload.title,
        },
      ];
      localStorage.setItem('todoData', JSON.stringify(data));
      return { ...state, data };
    },
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default todo.reducer;