import { configureStore } from "@reduxjs/toolkit";
import navigation from './navigation';
import snake from './snake';
import home from './home';
import todo from './todo';


const store = configureStore({
  reducer: {
    navigation,
    snake,
    home,
    todo,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;