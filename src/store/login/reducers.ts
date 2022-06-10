import { LoginActionType } from "./action-types";
import { LoginAction } from "./actions";

const initState = {
  username: "",
  password: ""
};

export const loginReducer = (state: typeof initState = initState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.CHANGE_USERNAME:
      return { ...state, username: action.payload };

    case LoginActionType.CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    default:
      return state
  }
};
