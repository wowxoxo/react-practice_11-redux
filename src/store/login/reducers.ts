import { CHANGE_USERNAME, CHANGE_PASSWORD } from "./action-types.ts";

const initState = {
  username: "",
  password: ""
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
  }
  return state;
};
