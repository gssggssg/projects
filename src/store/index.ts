import { createStore } from "redux";
import { SET_AGE, SET_NAME } from "./action";

interface User {
  name: string;
  age: number;
}

const common: User = {
  name: "张三123",
  age: 18,
};

function user(state = common, action: { type: any; n: number; name: any; }) {
  switch (action.type) {
    case SET_AGE:
      return {
        ...state,
        age: state.age + action.n,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
}

export default createStore(user);
