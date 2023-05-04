import {
  UPDATE_INTRODUCTION,
  UPDATE_RESOURCES,
} from "../../actions/actionType";
import { getUserInfo } from "../../firebase/simpleMocks/user";

const { user } = getUserInfo(123);

export const initialState = {
  resources: user.resources,
  introduction: user.bio,
  loading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INTRODUCTION:
      return {
        ...state,
        loading: action.status,
        introduction: action.payload.introduction,
      };

    case UPDATE_RESOURCES:
      return {
        ...state,
        loading: action.status,
        resources: action.payload.resources,
      };

    default:
      return state;
  }
};

export default profileReducer;
