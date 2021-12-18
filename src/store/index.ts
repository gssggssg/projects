import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import navigation from './navigation';

const appReducer = combineReducers({
  navigation,
});

// 创建 store
const store = createStore(appReducer, applyMiddleware(thunk));

export default store;