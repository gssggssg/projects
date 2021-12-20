import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import navigation from './navigation';
import snake from './snake';

const appReducer = combineReducers({
  navigation,
  snake,
});

// 创建 store
const store = createStore(appReducer, applyMiddleware(thunk));

export default store;