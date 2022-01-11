import { createSlice } from "@reduxjs/toolkit";
import guid from "../methods/UUID";
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
  [{ id: 1, value: "给读者的一封信！", title: "给读者的一封信，信是这样写的" }];

const states: todoType = {
  data: todoData,
  currentData: todoData[0],
  isEdit: true,
};

export const todo = createSlice({
  name: "todo",
  initialState: states,
  reducers: {
    changeData: (state, { payload }) => {
      return { ...state, currentData: payload };
    },
    // 保存
    saveData: (state, { payload }) => {
      let exist = true;
      const data = todoData.map((item: todoDataType[0]): todoDataType => {
        if (item.id === payload.currentData.id) {
          exist = false;
          return payload.currentData;
        }
        return item;
      });
      exist && data.unshift(payload.currentData);
      localStorage.setItem('todoData', JSON.stringify(data));
      JSON.parse(localStorage.getItem('todoData') as string);
      location.reload();
      return { ...state, data };
    },
    // 新增
    addData: (state, { }) => {
      const uuId = guid();
      return { ...state, currentData: { id: uuId, value: "", title: "" } };
    },
    // 删除
    deleteData: (state, { payload }) => {
      const data = todoData.filter((item: todoDataType[0]) => {
        return item.id !== payload.currentData.id;
      });
      localStorage.setItem('todoData', JSON.stringify(data));
      JSON.parse(localStorage.getItem('todoData') as string);
      location.reload();
      return { ...state, data };
    },
    updata: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

// localStorage.clear();
export default todo.reducer;