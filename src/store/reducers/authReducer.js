import { LOG_IN, LOG_OUT } from "../actions/authActions";
import { authUser } from "../initialValues/authUser";

const initialState = {
  authUser: authUser,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOG_IN:
      state.authUser = payload;
      return {
        ...state,
      };
    case LOG_OUT:
      state.authUser = {};
      return {
        ...state,
      };
    default:
      return state;
  }
}
