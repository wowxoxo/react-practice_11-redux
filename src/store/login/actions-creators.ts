import { Dispatch } from "react";
import { LoginActionType } from "./action-types.ts";
import { LoginType } from "./actions";

// export const actionChangeUsername = {
//   type: CHANGE_USERNAME,
//   payload: "lhlhi"
// };

export const changeUsername = (newUsername: string): LoginType => {
  return {
    type: LoginActionType.CHANGE_USERNAME,
    payload: newUsername
  };
};

export const changeUsername1 = (newUsername: string) =>  {
  return (dispatch: Dispatch<LoginActionType>) => {
    dispatch({
      type: LoginActionType.CHANGE_USERNAME,
      payload: newUsername
    })
  }
};

// export const actionChangePassword = {
//   type: CHANGE_PASSWORD,
//   payload: ""
// };

export const changePassword = (newPassword: string): LoginType => {
  return {
    type: LoginActionType.CHANGE_PASSWORD,
    payload: newPassword
  };
};

export const changePassword1 = (newPassword: string) => {

  return (dispatch: Dispatch<LoginActionType>) => {
    dispatch({
      type: LoginActionType.CHANGE_PASSWORD,
    payload: newPassword
    })
  }
};
