import { CHANGE_USERNAME, CHANGE_PASSWORD } from "../constants/actionTypes";

// export const actionChangeUsername = {
//   type: CHANGE_USERNAME,
//   payload: "lhlhi"
// };

export const changeUsername = (newUsername) => {
  return {
    type: CHANGE_USERNAME,
    payload: newUsername
  };
};

// export const actionChangePassword = {
//   type: CHANGE_PASSWORD,
//   payload: ""
// };

export const changePassword = (newPassword) => {
  return {
    type: CHANGE_PASSWORD,
    payload: newPassword
  };
};
