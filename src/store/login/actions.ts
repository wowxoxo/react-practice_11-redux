import { LoginActionType } from "./action-types";

interface changeUserNameAction {
  type: LoginActionType.CHANGE_USERNAME,
  payload: string
}


interface changePasswordAction {
  type: LoginActionType.CHANGE_PASSWORD,
  payload: string
}

export type LoginAction = changeUserNameAction | changePasswordAction
