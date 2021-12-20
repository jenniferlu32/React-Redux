import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import blogReducer from './blogs';
import bloggerReducer from './bloggers';

const rootReducer = combineReducers({
  blogs: blogReducer,
  bloggers: bloggerReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware));
