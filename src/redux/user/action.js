import { userActionTypes } from "./userActionTypes";

export const  setCurrentUser = user => ({
  type: userActionTypes.setCurrentUser,
  payload: user
});