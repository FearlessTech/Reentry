import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const store = configureStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
