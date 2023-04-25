import { SET_USER, SET_DARK_MODE } from '../../actions/actionType';

const INITIAL_STATE = {
  user: null,
  preferences: {
    darkMode: true,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export default userReducer;
