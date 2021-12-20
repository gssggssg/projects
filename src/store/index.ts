import navigation from './navigation';
import snake from './snake';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    navigation,
    snake,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;