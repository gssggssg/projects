import { configureStore } from "@reduxjs/toolkit";
import navigation from "./navigation";
import home from "./home";
import todo from "./todo";
import logIn from "./logIn";

const store = configureStore({
  reducer: {
    navigation,
    home,
    todo,
    logIn,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;