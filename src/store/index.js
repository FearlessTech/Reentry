import { createStore,  } from "redux"; 
// import thunkMiddleware from 'redux-thunk'; applyMiddleware(thunkMiddleware)
import rootReducers from "../reducers";

const store = createStore(rootReducers, {} );

export default store;
