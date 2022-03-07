import { configureStore } from "@reduxjs/toolkit";
import global from "./global";
import navigation from "./navigation";
import snake from "./snake";
import home from "./home";
import todo from "./todo";
import logIn from "./logIn";

const store = configureStore({
  reducer: {
    global,
    navigation,
    snake,
    home,
    todo,
    logIn,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;