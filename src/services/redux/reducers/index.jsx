import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
  profileState: profileReducer,
});

export default rootReducer;
