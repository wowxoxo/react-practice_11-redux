import { CHANGE_USERNAME, CHANGE_PASSWORD } from "../constants/actionTypes";

const initState = {
  username: "",
  password: ""
};

export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return { ...state, username: action.payload };

    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
  }
  return state;
};
